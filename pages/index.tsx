import type { NextPage } from 'next';
import Header from '../components/head';
import Image from 'next/image';
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

import style from '../styles/Mainpage.module.css';

import hizolloAvatar from '../public/avatars/hizollo.png';
import acAvatar from '../public/avatars/ac.png';
import zolloAvatar from '../public/avatars/zollo.png';
import chocomintAvatar from '../public/avatars/chocomint.png';
import weeeeeee from '../public/avatars/weeeeeee.png';

const discordOptions = {
	...DiscordDefaultOptions,
	profiles: {
		hizollo: {
			author: 'Junior HiZollo',
			avatar: hizolloAvatar.src,
      bot: true
		},
    ac: {
      author: 'AC0xRPFS001',
      avatar: acAvatar.src
    },
    zollo: {
      author: 'Zollo757347',
      avatar: zolloAvatar.src
    },
    chocomint: {
      author: 'chocomint',
      avatar: chocomintAvatar.src
    }
	},
}

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={`${style.block} ${style['block1']}`}>
        <Image id={style['block1-img']} src={hizolloAvatar} alt="Junior HiZollo Avatar" />
        <div className={style.p}>
          <span>Junior<br />HiZollo</span>
        </div>
      </div>
      <hr className={style.hr} />
      <div className={style['function-block']}>
        <Functions />
      </div>
    </>
  );
}

function Functions() {
  const [context, setContext] = useState(0);

  const handleClick = (value: number) => {
    setContext(value);
  }

  const buttonTexts = ["基本功能", "斜線指令", "音樂功能", "HiZollo 聯絡網", "迷你遊戲"]

  return (
    <>
      <div className={style['function-block-buttons']}>
        {
          buttonTexts.map((v, i) => {
            return <Button text={v} key={i} value={i} onValueChange={handleClick} />
          })
        }
      </div>
      <DiscordOptionsContext.Provider value={discordOptions}>
        <DiscordMessages>
        { context == 0 ?
          <>
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
          </> : <></>
        }
        { context == 1 ?
          <>
            <DiscordMessage profile="hizollo">
              <div slot="interactions">
                <DiscordInteraction profile="zollo" command={true}>fact</DiscordInteraction>
              </div>
              2001 年 1 月 15 日是維基百科的生日
            </DiscordMessage>
            <DiscordMessage profile="hizollo">
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
          </> : <></>
        }
        { context == 2 ?
          <>
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
          </> : <></>
        }
        { context == 3 ?
          <>
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
          </> : <></>
        }
        { context == 4 ?
          <>
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
          </> : <></>
        }
        </DiscordMessages>
      </DiscordOptionsContext.Provider>
    </>
  );
}

function Button({ text, value, onValueChange }: { text: string, value: number, onValueChange: (value: number) => void }) {
  return (
    <div className={style.button} onClick={() => onValueChange(value)} >{text}</div>
  )
}

export default Home
