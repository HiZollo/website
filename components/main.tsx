import type { NextPage } from 'next';
import React, { useState, ReactElement } from 'react';
import Link from 'next/link';
import wordmark from '../public/wordmark.png';
import wordmarkLarge from '../public/wordmark-large.png';
import Image from 'next/image';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        <div id="wordmark-large">
          <Link href="/">
            <a><Image src={wordmarkLarge} alt="Junior HiZollo" /></a>
          </Link>
        </div>
        <div id="wordmark">
          <Link href="/">
            <a><Image src={wordmark} alt="Junior HiZollo" /></a>
          </Link>
        </div>
        <div id="blank" />
        <Link href="/tutorials">
          <a>使用教學</a>
        </Link>
        <HeaderMenu id="infos" text="更多資訊">
          <Link href="/commands" passHref>
            <MenuItem onClick={handleClose}>指令列表</MenuItem>
          </Link>
          <Link href="/changelog" passHref>
            <MenuItem onClick={handleClose}>更新日誌</MenuItem>
          </Link>
          <Link href="/developers" passHref>
            <MenuItem onClick={handleClose}>開發團隊</MenuItem>
          </Link>
        </HeaderMenu>
        <HeaderMenu id="links" text="相關連結">
          <Link href="/redirects/invite" passHref>
            <MenuItem onClick={handleClose}>邀請 HiZollo</MenuItem>
          </Link>
          <Link href="/redirects/server" passHref>
            <MenuItem onClick={handleClose}>支援伺服器</MenuItem>
          </Link>
          <Link href="/redirects/dst" passHref>
            <MenuItem onClick={handleClose}>DST 頁面</MenuItem>
          </Link>
          <Link href="/redirects/repo" passHref>
            <MenuItem onClick={handleClose}>網站原始碼</MenuItem>
          </Link>
        </HeaderMenu>
        <Link href="/tos">
          <a>用戶條款</a>
        </Link>
      </header>

      <main>
        { children }
      </main>

      <BlankDiv />
    </>
  );
}

export default Layout;

function BlankDiv() {
  return <div style={{ height: '100px' }}></div>;
}

interface HeaderMenuProps {
  children?: React.ReactNode,
  id: string,
  text: string
}

function HeaderMenu(props: HeaderMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        aria-controls={open ? props.id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><a>{props.text}</a></button>
      <Menu
        id={props.id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.children}
      </Menu>
    </>
  );
}
