import type { NextPage } from 'next';
import React, { useState, ReactElement } from 'react';
import Link from 'next/link';
import wordmark from '../public/wordmark.png';
import wordmarkLarge from '../public/wordmark-large.png';
import Image from 'next/image';

import {
  Menu, MenuItem,
  SwipeableDrawer,
  List, ListItem, ListItemText,
  Divider,
  Box, Button,
  Collapse,
  useMediaQuery
} from '@mui/material';

import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  const largeWordmark = useMediaQuery('(min-width: 820px), (max-width: 715px) and (min-width: 450px)');
  const useWordmark = useMediaQuery('(min-width: 380px)');
  const fullLink = useMediaQuery('(min-width: 715px)');

  return (
    <>
      <header>
        { (largeWordmark && useWordmark) && <div id="wordmark-large">
          <Link href="/">
            <a><Image src={wordmarkLarge} alt="Junior HiZollo" /></a>
          </Link>
        </div> }
        { (!largeWordmark && useWordmark) && <div id="wordmark">
          <Link href="/">
            <a><Image src={wordmark} alt="Junior HiZollo" /></a>
          </Link>
        </div> }
        <div id="blank" />
        { fullLink ? <HeaderLinkList /> : <HeaderDrawer /> }
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

function HeaderLinkList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        <Link href="/invite" passHref>
          <MenuItem onClick={handleClose}>邀請 HiZollo</MenuItem>
        </Link>
        <Link href="/server" passHref>
          <MenuItem onClick={handleClose}>支援伺服器</MenuItem>
        </Link>
        <Link href="/dst" passHref>
          <MenuItem onClick={handleClose}>DST 頁面</MenuItem>
        </Link>
        <Link href="/repo" passHref>
          <MenuItem onClick={handleClose}>網站原始碼</MenuItem>
        </Link>
      </HeaderMenu>
      <Link href="/tos">
        <a>用戶條款</a>
      </Link>
    </>
  );
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

function HeaderDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event?.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {makeDrawerList('/', '首頁', toggleDrawer)}
            {makeDrawerList('/tutorials', '使用教學', toggleDrawer)}
            <ListCollapsableItem text="更多資訊">
              {makeDrawerList('/commands', '指令列表', toggleDrawer, {pl:4})}
              {makeDrawerList('/changelog', '更新日誌', toggleDrawer, {pl:4})}
              {makeDrawerList('/developers', '開發團隊', toggleDrawer, {pl:4})}
            </ListCollapsableItem>
            <ListCollapsableItem text="相關連結">
              {makeDrawerList('/invite', '邀請 HiZollo', toggleDrawer, {pl:4})}
              {makeDrawerList('/server', '支援伺服器', toggleDrawer, {pl:4})}
              {makeDrawerList('/dst', 'DST 頁面', toggleDrawer, {pl:4})}
              {makeDrawerList('/repo', '網站原始碼', toggleDrawer, {pl:4})}
            </ListCollapsableItem>
            {makeDrawerList('/tos', '用戶條款', toggleDrawer)}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

interface LCIProps {
  children?: React.ReactNode,
  text: string
}

function ListCollapsableItem(props: LCIProps) {
  const [open, setOpen] = useState(false);
  const { children, text } = props;
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}

function makeDrawerList(link:string, text: string,
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void, sx: object = {}) {
  return (
    <Link href={link} passHref>
      <ListItem button onClick={toggleDrawer(false)} sx={sx}>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}
