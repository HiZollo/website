import React from 'react';
import { Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Drawer = dynamic(() => import('./headerLinkDrawerC'));

export default function HeaderLinkDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
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
      <Drawer toggle={toggleDrawer} open={drawerOpen} isIos={iOS} />
    </>
  )
}

