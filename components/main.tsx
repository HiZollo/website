import type { NextPage } from 'next';
import React, { useState, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import wordmark from '@/public/wordmark.png';
import wordmarkLarge from '@/public/wordmark-large.png';

import {
  Menu, MenuItem,
  SwipeableDrawer,
  List, ListItem, ListItemText,
  Divider,
  Box, Button,
  Collapse, Grid,
  useMediaQuery
} from '@mui/material';

import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  const largeWordmark = useMediaQuery('(min-width: 820px), (max-width: 715px) and (min-width: 450px)');
  const useWordmark = useMediaQuery('(min-width: 380px)');
  const fullLink = useMediaQuery('(min-width: 716px)');
  const footerRow = useMediaQuery('(min-width: 520px)');

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

      <footer>
        <Grid
          container
          justifyContent="center"
          textAlign={footerRow ? 'left' : 'center'}
          direction={footerRow ? 'row' : 'column'}
          py={5}
          gap={{ xs: 5, sm: 10, md: 20, lg: 30 }}
          sx={{ width: { sm: '90vw' }, height: 'auto' }}
          >
          <Box>
            <Grid item className="footer-link-title">Junior HiZollo</Grid>
            <FooterLink href="/tutorials">使用教學</FooterLink>
            <FooterLink href="/commands">指令列表</FooterLink>
            <FooterLink href="/changelog">更新日誌</FooterLink>
            <FooterLink href="/tos">用戶條款</FooterLink>
          </Box>

          <Box>
            <Grid item className="footer-link-title">了解我們</Grid>
            <FooterLink href="/developers">開發團隊</FooterLink>
            <FooterLink href="/blog">開發日誌</FooterLink>
            <FooterLink href="https://github.com/hizollo">Github</FooterLink>
          </Box>

          <Box>
            <Grid item className="footer-link-title">更多連結</Grid>
            <FooterLink href="/invite">邀請連結</FooterLink>
            <FooterLink href="/server">官方伺服器</FooterLink>
            <FooterLink href="/playground">線上測試區</FooterLink>
            <FooterLink href="/dst">DST 頁面</FooterLink>
            <FooterLink href="https://top.gg/bot/584677291318312963">Top.gg</FooterLink>
          </Box>
        </Grid>
        <div id="copy">&copy; HiZollo 2019 - {new Date().getFullYear()}</div>
      </footer>
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
      <Link href="/tutorials" passHref>
        <a>使用教學</a>
      </Link>
      <HeaderMenu id="infos" text="更多資訊">
        <Link href="/annoucements" passHref>
          <MenuItem onClick={handleClose}>官方公告</MenuItem>
        </Link>
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
          <MenuItem onClick={handleClose}>官方伺服器</MenuItem>
        </Link>
        <Link href="/playground" passHref>
          <MenuItem onClick={handleClose}>線上測試區</MenuItem>
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
            {makeDrawerList('/annoucements', '官方公告', toggleDrawer)}
            {makeDrawerList('/tutorials', '使用教學', toggleDrawer)}
            <ListCollapsableItem text="更多資訊">
              {makeDrawerList('/commands', '指令列表', toggleDrawer, {pl:4})}
              {makeDrawerList('/changelog', '更新日誌', toggleDrawer, {pl:4})}
              {makeDrawerList('/developers', '開發團隊', toggleDrawer, {pl:4})}
            </ListCollapsableItem>
            <ListCollapsableItem text="相關連結">
              {makeDrawerList('/invite', '邀請 HiZollo', toggleDrawer, {pl:4})}
              {makeDrawerList('/server', '官方伺服器', toggleDrawer, {pl:4})}
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

interface FooterLinkProps {
  children?: React.ReactNode,
  href?: string
}

function FooterLink(props: FooterLinkProps) {
  return <Link href={props.href ?? '###'} passHref><Grid item component="a">{props.children}</Grid></Link>;
}
