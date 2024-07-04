import Link from 'next/link';
import React from 'react';
import { Menu, MenuItem } from '@mui/material';

export default function HeaderLinkList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
    <Link href="/tutorials" passHref>
      使用教學
    </Link>
    <HeaderMenu id="infos" text="更多資訊">
      <Link href="/announcements" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>官方公告</MenuItem>
      </Link>
      <Link href="/commands" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>指令列表</MenuItem>
      </Link>
      <Link href="/changelog" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>更新日誌</MenuItem>
      </Link>
      <Link href="/developers" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>開發團隊</MenuItem>
      </Link>
    </HeaderMenu>
    <HeaderMenu id="links" text="相關連結">
      <Link href="/invite" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>邀請 HiZollo</MenuItem>
      </Link>
      <Link href="/server" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>官方伺服器</MenuItem>
      </Link>
      <Link href="/playground" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>線上測試區</MenuItem>
      </Link>
      <Link href="/dst" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>DST 頁面</MenuItem>
      </Link>
      <Link href="/repo" passHref legacyBehavior>
        <MenuItem onClick={handleClose}>網站原始碼</MenuItem>
      </Link>
    </HeaderMenu>
    <Link href="/tos">
      用戶條款
    </Link>
  </>;
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
