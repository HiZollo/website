import React from 'react';
import Link from 'next/link';
import { Box, Collapse, List, ListItem, ListItemText, SwipeableDrawer } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface _ {
  toggle: (_: boolean) => ((event: React.KeyboardEvent | React.MouseEvent) => void)
  open: boolean,
  isIos: boolean
}

export default function ({ toggle, open, isIos }: _) {
  return (
    <SwipeableDrawer
      disableBackdropTransition={!isIos}
      disableDiscovery={isIos}
      open={open}
      onClose={toggle(false)}
      onOpen={toggle(true)}
      anchor="right"
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onKeyDown={toggle(false)}
      >
        <List>
          {makeDrawerList('/', '首頁', toggle)}
          {makeDrawerList('/annoucements', '官方公告', toggle)}
          {makeDrawerList('/tutorials', '使用教學', toggle)}
          <ListCollapsableItem text="更多資訊">
            {makeDrawerList('/commands', '指令列表', toggle, {pl:4})}
            {makeDrawerList('/changelog', '更新日誌', toggle, {pl:4})}
            {makeDrawerList('/developers', '開發團隊', toggle, {pl:4})}
          </ListCollapsableItem>
          <ListCollapsableItem text="相關連結">
            {makeDrawerList('/invite', '邀請 HiZollo', toggle, {pl:4})}
            {makeDrawerList('/server', '官方伺服器', toggle, {pl:4})}
            {makeDrawerList('/dst', 'DST 頁面', toggle, {pl:4})}
            {makeDrawerList('/repo', '網站原始碼', toggle, {pl:4})}
          </ListCollapsableItem>
          {makeDrawerList('/tos', '用戶條款', toggle)}
        </List>
      </Box>
    </SwipeableDrawer>
   )
}


interface LCIProps {
  children?: React.ReactNode,
  text: string
}

function ListCollapsableItem(props: LCIProps) {
  const [open, setOpen] = React.useState(false);
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
  toggle: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void, sx: object = {}) {
  return (
    <Link href={link} passHref legacyBehavior>
      <ListItem button onClick={toggle(false)} sx={sx}>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  );
}

