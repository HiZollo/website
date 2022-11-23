import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Grid, Box, Divider } from '@mui/material';
import React from 'react';

const TutorialNav: NextPage = () => {
  return <>
    <Divider color="white" sx={{ mt: '20px' }} />
    <Grid id="tutorial-nav" container border="1px solid white" direction="column" alignItems="center" maxWidth={1000} mt={3} mx="auto" px={2}>
      <Grid item p={2}>
        <Link href="/tutorials"><strong>使用教學</strong></Link>
        <Divider color="white" />
      </Grid>
      {createTutorialList("基本", [
        { href: '/tutorials/invite', text: "邀請 HiZollo" },
        { href: '/tutorials/commands', text: "指令清單及一般指令" },
        { href: '/tutorials/command-help', text: "指令用法的查詢" }
      ])}
      {createTutorialList("進階", [
        { href: '/tutorials/subcommands', text: "指令群" },
        { href: '/tutorials/command-aliases', text: "指令別名" },
        { href: '/tutorials/subcommand-shortcuts', text: "群組指令捷徑" }
      ])}
      {createTutorialList("特殊", [
        { href: '/tutorials/hidden-commands', text: "隱藏指令" },
        { href: '/tutorials/support-server', text: "支援伺服器" },
        { href: '/tutorials/hzscript', text: "HiZollo Script" }
      ])}
      {createTutorialList("斜線指令", [
        { href: '/tutorials/slash-start', text: "開始使用" },
        { href: '/tutorials/slash-help', text: "指令用法的查詢" },
        { href: '/tutorials/slash-z-command', text: "斜線 Z 指令" }
      ])}
      {createTutorialList("HiZollo 聯絡網", [
        { href: '/tutorials/guildrop', text: "HiZollo Guild Drop" }
      ])}
    </Grid>
  </>;
}

interface TutorialListItem {
  href?: string,
  text: string
}

function createTutorialList(title: string, props: TutorialListItem[]) {
  return (
    <Grid item container direction="column" alignItems="center" justifyContent="center" width="100%">
      <Box width="100%" textAlign="center" borderRadius="10px" sx={{ backgroundColor: 'black' }}>
        {title}
      </Box>
      <Box p={2}>
        {
          props.map((v, i) => {
            return (
              <React.Fragment key={i}>
                { i == 0 ? '' : '・'}
                <Link href={v.href ?? '###'}>
                  {v.text}
                </Link>
              </React.Fragment>
            );
          })
        }
      </Box>
    </Grid>
  );
}

interface StaticImageData {
  src: string,
  height: number,
  width: number,
  blurDataURL?: string
}

interface TutorialImageProps {
  src: StaticImageData | string,
  alt: string,
  height: number
}

function TutorialImage(props: TutorialImageProps) {
  return (
    <div style={{ margin: '20px 0' }}>
      <Image src={props.src} alt={props.alt} width={400} height={props.height} />
    </div>
  )
}

interface TutorialWrapProps {
  children?: React.ReactNode
}

function TutorialWrap(props: TutorialWrapProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export { TutorialNav, TutorialImage, TutorialWrap };
