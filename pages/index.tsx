import type { NextPage, GetStaticProps } from 'next';
import Header from '@/components/head';

import { useState } from 'react';
import { useTheme, Direction } from '@mui/material/styles';

import style from '@/styles/Mainpage.module.css';

import { BasicFunction } from '@/components/mainpageDiscordMessages/basic';
import { SlashFunction } from '@/components/mainpageDiscordMessages/slash';
import { MusicFunction } from '@/components/mainpageDiscordMessages/music';
import { NetworkFunction } from '@/components/mainpageDiscordMessages/network';
import { GamesFunction } from '@/components/mainpageDiscordMessages/games';
import { HiddenCommandMessages } from '@/components/mainpageDiscordMessages/hiddenCommand';

import { RateCard } from '@/components/class/RateCard';
import { sendDiscordAPIRequest } from '@/util/discord/sendRequest';
import { chunk } from '@/util/chunkArray';
import ratecardReview from '@/data/ratecard.json';

import {
  Grid,
  Box,
  Tabs,
  Tab,
  Button,
  Divider,
  useMediaQuery
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ReviewStruct {
  avatar: string,
  name: string,
  content: string,
  rate: number
}

interface HomepageProps {
  ratecardInfo: Array<ReviewStruct>
}

const Home: NextPage<HomepageProps> = ({ ratecardInfo }: HomepageProps) => {
  return (
    <>
      <Header />
        <div id={style.mainBlock}>
          <div id={style['mainBlock-div-1']}>Junior HiZollo</div>
          <div id={style['mainBlock-div-2']}>功能完整的 Discord 機器人</div>
          <div style={{ display: 'flex', gap: '35px' }}>
            <MainButton href="/invite">邀請回家</MainButton>
            <MainButton href="/tutorials">使用教學</MainButton>
          </div>
        </div>
      <Divider color="white" />
      <Functions />
      <Divider color="white" sx={{ mt: 0, mb: 5 }} />
      <HdCommands />
      <Divider color="white" sx={{ mt: 10, mb: 0 }} />
      <Rates data={ratecardInfo} />
      <Divider color="white" sx={{ my: 10 }} />
      <Invites />
    </>
  );
}

function Functions() {
  const [value, setValue] = useState<number>(0);
  const theme = useTheme();

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <Box sx={{ width: '100%', height: { xs: '750px', sm: '650px' } }}>
        <Tabs
          value={value}
          onChange={(_: React.SyntheticEvent, newValue: number) => { setValue(newValue); }}
          textColor="inherit"
          aria-label="functions"
          TabIndicatorProps={{ style: { background: '#94B4FA' }}}
          variant="scrollable"
          selectionFollowsFocus
        >
          <Tab label="基本功能" />
          <Tab label="斜線指令" />
          <Tab label="音樂功能" />
          <Tab label="跨群聯通" />
          <Tab label="迷你遊戲" />
        </Tabs>
        <SwipeableViews
          containerStyle={{
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
          }}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          resistance
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <BasicFunction />
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <SlashFunction />
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <MusicFunction />
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <NetworkFunction />
          </TabPanel>

          <TabPanel value={value} index={4} dir={theme.direction}>
            <GamesFunction />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  )
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  dir: Direction
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 4 }} style={{ borderTop: '1px solid #FFFFFF55' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function HdCommands() {
  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={12} md={6}>
        <div className={style.block} style={{ flexDirection: "column" }}>
          <div className={style['block-div-1']}>許多有趣彩蛋</div>
          <div className={style['block-div-2']}>等待你來發掘</div>
        </div>
      </Grid>
      <Grid item xs={12} md={6} p={0}>
        <HiddenCommandMessages />
      </Grid>
    </Grid>
  );
}

function Rates({ data }: { data: Array<ReviewStruct> }) {
  const [index, changeIndex] = useState(0);
  const M = useMediaQuery('(max-width: 630px)');
  const L = useMediaQuery('(max-width: 890px)');
  const contents = 
    M ? [...chunk(data, 1)] : 
    L ? [...chunk(data, 2)] : [...chunk(data, 3)];
  const interval = M ? 3000 : L ? 4000 : 6000;
  return (
    <>
      <Grid container justifyContent="center">
        <Box component="h1" sx={{ py: 3 }}>用戶評價</Box>
        <AutoPlaySwipeableViews
          containerStyle={{
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
          }}
          index={index}
          onChangeIndex={(i: number) => { changeIndex(i); }}
          interval={interval}
        >
          {
            contents.map((v, i: number) => {
              return (
                <div className={style.rates} key={i}>
                  {v.map((c) => (
                    new RateCard()
                      .setAvatar(c.avatar)
                      .setName(c.name)
                      .setComment(c.content)
                      .setRates(c.rate)
                      .toJsx()
                  ))}
                </div>
              );
            })
          }
        </AutoPlaySwipeableViews>
      </Grid>
    </>
  );
}

function Invites() {
  return (
    <Grid container direction="row" spacing={4} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
      <Grid item xs={12} md={6} p={0}>
        <Grid container className={style.block} sx={{ flexDirection: { md: "column", xs: "row" }}}>
          <MainButton href="/invite">邀請 HiZollo</MainButton>
          <MainButton href="/server">支援伺服器</MainButton>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} p={0}>
        <div className={style.block} style={{ flexDirection: "column" }}>
          <div className={style['block-div-1']}>心動不如趕快行動</div>
          <div className={style['block-div-2']}>點擊按鈕加入我們</div>
        </div>
      </Grid>
    </Grid>
  );
}

interface ButtonProps {
  children?: React.ReactNode
  href?: string
}

function MainButton(props: ButtonProps) {
  return (
    <Button
      href={props.href ?? '###'}
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: '#5484FA',
        height: { xs: 40, md: 50 },
        width: { xs: 'auto' },
        fontSize: { xs: 14, md: 18 },
        px: { xs: 3 }
      }}
    >
      {props.children}
    </Button>);
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const userData = (await Promise.all(
    ratecardReview.data.map(user => {
      return sendDiscordAPIRequest({
        path: `/api/v10/users/${user.userId}`,
        token: process.env.TOKEN!
      })
    })
  )).map(v => JSON.parse(v));

  const reviews = userData.map((user, index) => {
    let avatarUrl: string = '';
    if (user.avatar) {
      const extension = user.avatar.startsWith('a_') ? 'gif' : 'webp';
      avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}`
    } else {
      avatarUrl = `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`
    }
    
    return { 
      avatar: avatarUrl,
      name: user.username ?? null,
      rate: ratecardReview.data[index].rate ?? null,
      content: ratecardReview.data[index].content ?? null
    }
  });

  return {
    props: {
      ratecardInfo: reviews
    },
    revalidate: 60
  }
}
