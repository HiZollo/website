import type { NextPage } from 'next';
import Header from '../components/head';
import Image from 'next/image';
const {
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordReply,
  DiscordButtons,
  DiscordButton,
  DiscordMarkdown,
  DiscordOptionsContext,
  DiscordDefaultOptions,
  DiscordInteraction
} = require('@discord-message-components/react');
import '@discord-message-components/react/styles'

import { useState, useEffect } from 'react';
import { useTheme, Direction } from '@mui/material/styles';

import style from '../styles/Mainpage.module.css';

import hizolloAvatar from '../public/avatars/hizollo.png';
import acAvatar from '../public/avatars/ac.png';
import zolloAvatar from '../public/avatars/zollo.png';
import chocomintAvatar from '../public/avatars/chocomint.png';
import weeeeeee from '../public/avatars/weeeeeee.png';

import { Grid, Box, Tabs, Tab } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

const discordOptions = {
	...DiscordDefaultOptions,
	profiles: {
		hizollo: {
			author: 'Junior HiZollo',
			avatar: hizolloAvatar.src,
      roleColor: "#E3D547",
      bot: true
		},
    ac: {
      author: 'AC0xRPFS001',
      avatar: acAvatar.src,
      roleColor: "#657C89"
    },
    zollo: {
      author: 'Zollo757347',
      avatar: zolloAvatar.src,
      roleColor: "#65C87A"
    },
    chocomint: {
      author: 'chocomint',
      avatar: chocomintAvatar.src,
      roleColor: "#E3F0F7"
    }
	},
}

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={12}>
          <Image id={style['block1-img']} src={hizolloAvatar} alt="Junior HiZollo Avatar" />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', lineHeight: '55px' }}>
          <div style={{ fontSize: '45px', fontWeight: 'bolder' }}>Junior HiZollo</div>
          <div style={{ fontSize: '24px', fontWeight: 'bolder' }}>功能完整的 Discord 機器人</div>
        </div>
        </Grid>
      </Grid>
      <hr className={style.hr} />
      <Functions />
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
      <Box sx={{ width: '100%', height: '600px' }}>
        <Tabs
          value={value}
          onChange={(event: React.SyntheticEvent, newValue: number) => { setValue(newValue); }}
          textColor="inherit"
          aria-label="functions"
          TabIndicatorProps={{ style: { background: '#94B4FA' }}}
          variant="fullWidth"
          selectionFollowsFocus
        >
          <Tab label="基本功能" />
          <Tab label="斜線指令" />
          <Tab label="音樂功能" />
          <Tab label="跨群聯通" />
          <Tab label="迷你遊戲" />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
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

function BasicFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="zollo">
        z!8ball 我是不是大佬
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordMention profile="zollo" />，我想是的
      </DiscordMessage>
      <DiscordMessage profile="ac">
        z!8ball 那我呢
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordMention profile="ac" />，不
      </DiscordMessage>
    </DiscordMessageWrapper>
  );
}

function SlashFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="hizollo">
        <div slot="interactions">
          <DiscordInteraction profile="zollo" command={true}>fact</DiscordInteraction>
        </div>
        2001 年 1 月 15 日是維基百科的生日
      </DiscordMessage>
      <DiscordMessage profile={"hizollo"}>
        <div slot="interactions">
          <DiscordInteraction profile="zollo" command={true}>fact</DiscordInteraction>
        </div>
        同一個人在月球上起跳的高度大約是地球上的 6 倍
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <div slot="interactions">
          <DiscordInteraction profile="ac" command={true}>confession</DiscordInteraction>
        </div>
        <DiscordEmbed
          slot = "embeds"
          authorIcon = {acAvatar.src}
          authorName = "Love Letter"
          borderColor = "#FF69DD"
        >
        <DiscordMention profile="zollo" />，你收到了來自 <DiscordMention profile="ac">AC0xRPFS001</DiscordMention> 的告白<br /><br />請選擇你的回覆……
        </DiscordEmbed>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton type="success">❤️ 接受</DiscordButton>
            <DiscordButton type="danger">❌ 拒絕</DiscordButton>
            <DiscordButton type="secondary">👍 發好人卡</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}

function MusicFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="chocomint">
      z!p <a href="https://www.youtube.com/watch?v=TZC02UdbStM">https://www.youtube.com/watch?v=TZC02UdbStM</a>
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordEmbed
          authorIcon = {hizolloAvatar.src}
          authorName = "HiZollo 的音樂中心"
          borderColor = "#94B4FA"
        >
          <DiscordMarkdown>
            已加入 `聽歌`
          </DiscordMarkdown>
        </DiscordEmbed>
        <DiscordEmbed
          slot = "embeds"
          authorIcon = {hizolloAvatar.src}
          authorName = "HiZollo 的音樂中心"
          borderColor = "#94B4FA"
          thumbnail = "https://i.ytimg.com/vi_webp/TZC02UdbStM/maxresdefault.webp"
          footerIcon = {chocomintAvatar.src}
        >
          目前正在播放： <a href="https://www.youtube.com/watch?v=TZC02UdbStM">群青 / YOASOBI【Covered by Kotoha】</a>
          <div slot="footer">由 chocomint 指定的樂曲</div>
        </DiscordEmbed>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton>暫停</DiscordButton>
            <DiscordButton disabled>繼續</DiscordButton>
            <DiscordButton type="secondary">正常播放</DiscordButton>
            <DiscordButton type="danger">跳過</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton type="success">詳細資訊</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}

function NetworkFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage author="chocomint#1489" avatar={chocomintAvatar.src} bot={true}>
      這是哪裡？<br />我怎麼變成機器人
      </DiscordMessage>
      <DiscordMessage author="AC0xRPFS001#5007" avatar={acAvatar.src} bot={true}>
      一個神秘且不受空間隔閡的跨次元空間<br />你在這裡發言的同時，會有靈魂抽取裝置將你的靈魂汲取出來，放入機器中克隆數份，並傳至其他次元<br />所以其他地方就會看到你，你也會看到其他地方的人<br />這也是為什麼你會變機器人
      </DiscordMessage>
      <DiscordMessage author="Zollo757347#3987" avatar={zolloAvatar.src} bot={true}>
      樓上廢話好多喔<br />就是跨群聊天室
      </DiscordMessage>
      <DiscordMessage author="AC0xRPFS001#5007" avatar={acAvatar.src} bot={true}>
      🛐
      </DiscordMessage>
      <DiscordMessage author="dQw4w9WgXcQ#9487" avatar={weeeeeee.src} bot={true}>
      🛐
      </DiscordMessage>
      <DiscordMessage author="chocomint#1489" avatar={chocomintAvatar.src} bot={true}>
      🛐
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}

function GamesFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="hizollo" edited>
        <div slot="interactions">
          <DiscordInteraction profile="ac" command={true}>tictactoe</DiscordInteraction>
        </div>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>3</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>6</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton type="danger" disabled>停止遊戲</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
      <div slot="interactions">
        <DiscordInteraction profile="hizollo" reply edited></DiscordInteraction>
      </div>
      <DiscordMarkdown>
        恭喜 <DiscordMention profile="zollo" />（符號 ❌）獲勝！<br />
        **遊玩時間**：1 分 8 秒<br />
        **下棋次數**：<br />
        　<DiscordMention profile="zollo" />：4 步<br />
        　<DiscordMention profile="ac" />：3 步
      </DiscordMarkdown>
      </DiscordMessage>
      <DiscordMessage profile="zollo">
        <DiscordMention profile="ac" /> 你好爛
      </DiscordMessage>
    </DiscordMessageWrapper>
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
        <Box sx={{ p: 3 }} style={{ borderTop: '1px solid #FFFFFF55' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface DMWProps {
  children?: React.ReactNode
}

function DiscordMessageWrapper(props: DMWProps) {
  return (
    <DiscordOptionsContext.Provider value={discordOptions}>
      <DiscordMessages>
        {props.children}
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  )
}

export default Home
