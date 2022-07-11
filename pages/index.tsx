import type { NextPage, GetStaticProps } from 'next';
import Header from '../components/head';
const {
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordButtons,
  DiscordButton,
  DiscordMarkdown,
  DiscordOptionsContext,
  DiscordDefaultOptions,
  DiscordInteraction
} = require('@discord-message-components/react');
import '@discord-message-components/react/styles'

import { useState } from 'react';
import { useTheme, Direction } from '@mui/material/styles';

import style from '../styles/Mainpage.module.css';

import hizolloAvatar from '../public/avatars/hizollo.png';
import acAvatar from '../public/avatars/ac.png';
import zolloAvatar from '../public/avatars/zollo.png';
import chocomintAvatar from '../public/avatars/chocomint.png';

import weeeeeee from '../public/avatars/weeeeeee.png';

import { RateCard } from '../components/class/RateCard';
import { sendDiscordAPIRequest } from '../util/discord/sendRequest'

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

interface ReviewStruct {
  avatar: string,
  name: string,
  content: string,
  rate: number
}

interface ReviewDataStruct {
  userId: string, 
  content: string,
  rate: number
}

const reviewData: ReviewDataStruct[] = [
  { userId: "817657259877859328", content: "這是一個多功能而實用具娛樂性的爛bot！", rate: 5 },
  { userId: "729568770808610917", content: "很多指令都很有趣、很滑稽又很搞笑。蠻享受的 雖然有點氣死人", rate: 4.5 },
  { userId: "856832393007333387", content: "推薦自己的伺服器用一個 HiZollo ouob", rate: 5 },
  { userId: "824216020750172171", content: "在第一次使用 HiZollo 時，我就發現這機器人可以拿來嗆朋友跟浪費朋友的時間以及挑撥離間，誠摯推薦給有上述需求的用戶使用。", rate: 5 },
  { userId: "581653506641887265", content: "功能很齊全，但是美中不足的是他嗆人的話太少了", rate: 4 },
  { userId: "653603066670743553", content: "娛樂性很高的機器人，尤其是用來偷嗆人（", rate: 4 },
  { userId: "542962924897959938", content: "只會莫名其妙嗆人，嗆不贏還會直接下線", rate: 1 },
  { userId: "720880053239414878", content: " HiZollo 我婆啦～🤤", rate: 5 },
  { userId: "711615292157067377", content: "很喜歡 HiZollo 的小功能，也很喜歡被他嗆＆嗆他（？？）", rate: 5 },
  { userId: "332383566443053058", content: "他是一個很互動性很高的機器人，而且開發者很用心，讓這個機器人很有自己的個性，能從指令反應看得出這個機器人有點嗆，但又很幽默。被他嗆得感覺好爽", rate: 5 },
  { userId: "727119118641266750", content: "整體來說 HiZollo 很好用，但有時候在聽歌的時候會卡", rate: 4 },
  { userId: "622373851333918720", content: "Junior HiZollo 是我用過最有趣的 Discord 機器人，沒有之一。它還有多款小遊戲，是娛樂機器人的不二之選。", rate: 5 },
  { userId: "844129328072884265", content: "跨群功能讓我認識了很多新朋友", rate: 4 },
  { userId: "726052707663872090", content: "功能齊全 更新多 而且可以跟朋友玩", rate: 5 },
  { userId: "475958550699442176", content: "動不動就沒回應，遊戲玩一玩會直接斷線，還會一直亂嗆人", rate: 1 },
  { userId: "880834316106612747", content: "HiZollo 是什麼爛 bot 啊，他媽的看他那麼久，一直出 bug，難得創作者那麼佬團隊那麼神，創造了一個破爛 bot，真的是齁⋯他們一定是故意做一個爛 bot，一直對外說自己爛，這種人真壞", rate: 5 },
  { userId: "531794839097049109", content: "功能尚可 但是反應會讓大多數人很幹", rate: 3 },
  { userId: "866680482577383454", content: "在我有接觸的中文機器人應該算是功能前幾完整的 而且很多其他機器人沒有的小遊戲", rate: 4 }
];

function n_set(arr:ReviewStruct[], number: number) {
  const r: Array<ReviewStruct[]> = [];
  for(let i=0; i<arr.length; i+=number) {
    r.push([]);
    for(let j=i; j<i+number; ++j) {
      r[i/number].push(arr[j]);
    }
  }

  return r;
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
        <DiscordMessageWrapper>
          <DiscordMessage profile="zollo">
            ...
          </DiscordMessage>
          <DiscordMessage profile="hizollo">
            { ~~(Math.random() * 1000) < 6 ? "。。。。。。。" : "......."}
          </DiscordMessage>
          <DiscordMessage profile="zollo">
            吵死了 HiZollo
          </DiscordMessage>
          <DiscordMessage profile="hizollo">
            QAQ
          </DiscordMessage>
        </DiscordMessageWrapper>
      </Grid>
    </Grid>
  );
}

function Rates({ data }: { data: Array<ReviewStruct> }) {
  const [index, changeIndex] = useState(0);
  const M = useMediaQuery('(max-width: 630px)');
  const L = useMediaQuery('(max-width: 890px)');
  const contents = n_set(data, M ? 1 : L ? 2 : 3);
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

export const getStaticProps: GetStaticProps = async () => {
  const userData = (await Promise.all(
    reviewData.map(user => {
      return sendDiscordAPIRequest({
        path: `/api/v10/users/${user.userId}`,
        token: process.env.TOKEN!
      })
    })
  )).map(v => JSON.parse(v));

  const reviews = userData.map((user, index) => {
    return { 
      avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp` ?? null,
      name: user.username ?? null,
      rate: reviewData[index].rate ?? null,
      content: reviewData[index].content ?? null
    }
  });

  return {
    props: {
      ratecardInfo: reviews
    },
    revalidate: 60
  }
}
