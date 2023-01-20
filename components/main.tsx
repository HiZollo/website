import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import wordmark from '@/public/wordmark.png';
import wordmarkLarge from '@/public/wordmark-large.png';
import { ReactElement } from 'react';

import { Box, Grid, useMediaQuery } from '@mui/material';

const HeaderLinkList = dynamic(() => import('./headerLinkList'));

const HeaderDrawer = dynamic(() => import('./headerLinkDrawer'));

const Layout: NextPage<{ children: ReactElement }> = ({ children }) => {
  const largeWordmark = useMediaQuery('(min-width: 820px), (max-width: 715px) and (min-width: 450px)');
  const useWordmark = useMediaQuery('(min-width: 380px)');
  const fullLink = useMediaQuery('(min-width: 716px)');
  const footerRow = useMediaQuery('(min-width: 520px)');

  return <>
    <header>
      { (largeWordmark && useWordmark) && <div id="wordmark-large">
        <Link href="/">
          <Image src={wordmarkLarge} alt="Junior HiZollo" width={300} />
        </Link>
      </div> }
      { (!largeWordmark && useWordmark) && <div id="wordmark">
        <Link href="/">
          <Image src={wordmark} alt="Junior HiZollo" width={200} />
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
  </>;
}

export default Layout;

function BlankDiv() {
  return <div style={{ height: '100px' }}></div>;
}

interface FooterLinkProps {
  children?: React.ReactNode,
  href?: string
}

function FooterLink(props: FooterLinkProps) {
  return <Link href={props.href ?? '###'} passHref legacyBehavior><Grid item component="a">{props.children}</Grid></Link>;
}
