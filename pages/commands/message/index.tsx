import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Commands.module.css';

const MessageCommands: NextPage = () => {
  return (
    <>
      <Head>
        <title>Junior HiZollo｜指令列表</title>
      </Head>
      <h1>HiZollo 的指令列表</h1>
      <strong>訊息指令</strong>｜<Link href="/commands/slash"><a>斜線指令</a></Link><br />
      這個指令列表能用 <Cmd cmd="help" /> 取得，且能使用 <Cmd cmd="help [指令名稱]" /> 獲得更詳細的說明。
      <InfoTable />
      <hr />
      <ContactTable />
      <hr />
      <NetworkTable />
      <hr />
      <ManageTable />
      <hr />
      <FunctionTable />
      <hr />
      <CommandGroupTable />
      <hr />
      <EntertainTable />
      <hr />
      <GameTable />
      <hr />
      <MiscellaneousTable />
    </>
  );
}

function InfoTable () {
  return (
    <>
      <h2>資訊</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "announcement"
          aliases = {['ann']}
          description = "閱讀官方公告"
        />
        <CommandInfo
          cmd = "botinfo"
          description = "查看機器人資訊"
        />
        <CommandInfo
          cmd = "dev"
          description = "檢視開發團隊清單"
        />
        <CommandInfo
          cmd = "help"
          description = "開啟指令清單"
          usage = {['', 'announcement']}
        />
        <CommandInfo
          cmd = "links"
          aliases = {['link', 'hzweb', 'invite', 'website']}
          description = "取得機器人相關連結"
        />
        <CommandInfo
          cmd = "name"
          description = "機器人叫什麼名字呢"
        />
      </table>
    </>
  );
}

function ContactTable() {
  return (
    <>
      <h2>聯繫</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "bug"
          description = "回報錯誤"
          usage = {['avatar指令跑不出來']}
        />
        <CommandInfo
          cmd = "suggest"
          aliases = {['sug']}
          description = "傳送建議到後台"
          usage = {['新增經驗值系統']}
        />
      </table>
    </>
  );
}

function NetworkTable() {
  return (
    <>
      <h2>HiZollo 聯絡網</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "guildrop"
          aliases = {['hzdrop']}
          description = "傳送訊息至指定伺服器"
          usage = {['Surviv.io 中文維基']}
        />
      </table>
    </>
  )
}

function ManageTable() {
  return (
    <>
      <h2>管理</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "addrole"
          description = "為使用者新增身份"
          usage = {['<span class="dc-mention">@AC0xRPFS001</span> 管理員']}
        />
        <CommandInfo
          cmd = "ban"
          description = "封鎖一位用戶"
          usage = {['<span class="dc-mention">@Eric</span>']}
        />
        <CommandInfo
          cmd = "kick"
          description = "踢出一位用戶"
          usage = {['<span class="dc-mention">@Zollo757347</span> 太吵']}
        />
        <CommandInfo
          cmd = "removerole"
          description = "把一位使用者的身份移除"
          usage = {['<span class="dc-mention">@Rick</span> 警告中']}
        />
        <CommandInfo
          cmd = "unban"
          description = "解除封鎖一位用戶\n（由於無法 tag 他，必須使用 ID）"
          usage = {['584677291318312963']}
        />
      </table>
    </>
  );
}

function FunctionTable() {
  return (
    <>
      <h2>功能</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "avatar"
          aliases = {['av']}
          description = "顯示一或多名用戶的頭像"
          usage = {['', '<span class="dc-mention">@Zollo757347</span>']}
        />
        <CommandInfo
          cmd = "calc"
          aliases = {['c']}
          description = "計算一串算式"
          usage = {['1+1', '(9-1)/2']}
        />
        <CommandInfo
          cmd = "choose"
          description = "多選一"
          usage = {['小明 小華 小美']}
        />
        <CommandInfo
          cmd = "getmsg"
          aliases = {['gm']}
          description = "將伺服器最近訊息匯出為指定格式的檔案，可以是文字檔或 JSON 檔案"
          usage = {['', 'json']}
        />
        <CommandInfo
          cmd = "purge"
          description = "刪除指定數量的訊息"
          usage = {['80']}
        />
        <CommandInfo
          cmd = "server"
          aliases = {['guild']}
          description = "取得伺服器資訊"
        />
        <CommandInfo
          cmd = "userinfo"
          aliases = {['user']}
          description = "取得用戶資訊"
          usage = {['<span class="dc-mention">@A Person</span>']}
        />
        <CommandInfo
          cmd = "vote"
          aliases = {['poll']}
          description = "讓 HiZollo 幫你發起一個投票"
          usage = {['`晚餐要吃什麼` `牛排` `雞排` `垃圾`']}
        />
      </table>
    </>
  );
}

function CommandGroupTable() {
  return (
    <>
      <h2>指令群</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "diep"
          aliases = {['d']}
          description = '顯示 <a href="/commands/message/diep">diep 指令群列表</a>或執行群組指令'
        />
        <CommandInfo
          cmd = "minecraft"
          aliases = {['mc']}
          description = '顯示 <a href="/commands/message/diep">minecrafr 指令群列表</a>或執行群組指令'
        />
        <CommandInfo
          cmd = "music"
          aliases = {['m']}
          description = '顯示 <a href="/commands/message/diep">music 指令群列表</a>或執行群組指令'
        />
        <CommandInfo
          cmd = "osu"
          aliases = {['o']}
          description = '顯示 <a href="/commands/message/diep">osu 指令群列表</a>或執行群組指令'
        />
      </table>
    </>
  );
}

function EntertainTable() {
  return (
    <>
      <h2>娛樂</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "8ball"
          description = "詢問神奇的八號球"
          usage = {['Am I smart?']}
        />
        <CommandInfo
          cmd = "coin"
          description = "擲一枚硬幣"
        />
        <CommandInfo
          cmd = "confession"
          aliases = {['cf']}
          description = "向伺服器中的一位用戶告白"
          usage = {['<span class="dc-mention">Rick Astley</span>']}
        />
        <CommandInfo
          cmd = "dice"
          description = "擲骰子"
        />
        <CommandInfo
          cmd = "fact"
          description = "查看一個事實，可鍵入分類以查看特定種類的事實，目前有 anecdote、discord、human、hz、math、nature、subject、world 共 8 種分類"
          usage = {['', 'anecdote hz']}
        />
        <CommandInfo
          cmd = "react"
          aliases = {['r']}
          description = "讓 HiZollo 為前一則訊息反應個表情"
          usage = {['🤔']}
        />
        <CommandInfo
          cmd = "repeat"
          description = "讓機器人複讀你的話"
          usage = {['I love pineapple pizza']}
        />
        <CommandInfo
          cmd = "say"
          description = "讓機器人說一句指定的話"
          usage = {['I am HiZollo']}
        />
        <CommandInfo
          cmd = "throwball"
          aliases = {['throw']}
          description = "把球砸向你討厭的人"
          usage = {['<span class="dc-mention">@AC0xRPFS001</span>']}
        />
        <CommandInfo
          cmd = "youtube"
          aliases = {['yt']}
          description = "跟朋友一起在 Discord 中觀看 Youtube 的影片"
        />
      </table>
    </>
  );
}

function GameTable() {
  return (
    <>
      <h2>遊戲</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "fliptrip"
          aliases = {['ft']}
          description = "遊玩指定棋子數量的 Flip Trip"
          usage = {['4']}
        />
        <CommandInfo
          cmd = "gomoku"
          aliases = {['gmk']}
          description = "	與朋友遊玩 13x13 的五子棋"
          usage = {['<span class="dc-mention">@ABC</span>']}
        />
        <CommandInfo
          cmd = "guessab"
          aliases = {['ga']}
          description = "遊玩一場猜 AB 遊戲，可加上 hard 指定為困難模式"
          usage = {['', 'hard']}
        />
        <CommandInfo
          cmd = "lightsup"
          aliases = {['lu']}
          description = "遊玩一場點燈遊戲"
        />
        <CommandInfo
          cmd = "tictactoe"
          aliases = {['ttt']}
          description = "跟 HiZollo 或是另一位用戶遊玩井字遊戲"
          usage = {['first', '<span class="dc-mention">@Juan</span>']}
        />
      </table>
    </>
  )
}

function MiscellaneousTable() {
  return (
    <>
      <h2>雜項</h2>
      <table className={styles['helplist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "ping"
          description = "傳送訊息至指定伺服器"
        />
        <CommandInfo
          cmd = "refresh"
          description = "重刷 HiZollo 的動態"
        />
        <CommandInfo
          cmd = "rip"
          description = "Rest In Peace!"
        />
        <CommandInfo
          cmd = "thinking"
          description = "讓機器人送出一個表情庫的思考中表情，你也可以鍵入種類讓他輸出特定的思考表情"
          usage = {['', '10']}
        />
        <CommandInfo
          cmd = "useless"
          description = "Useless."
        />
      </table>
    </>
  )
}

export default MessageCommands;

/***** Utils *****/
interface CommandNameProps {
  cmd: string;
}

interface CommandInfoProps {
  cmd: string;
  aliases?: string[];
  description: string;
  usage?: string[];
}

function Cmd (props: CommandNameProps) {
  return <code>z!{props.cmd}</code>
}

function TableHeader () {
  return (
    <tr>
      <td className={styles['helplist-header']}><strong>指令</strong></td>
      <td className={styles['helplist-header']}><strong>替代指令</strong></td>
      <td className={styles['helplist-header']}><strong>指令說明</strong></td>
      <td className={styles['helplist-header']}><strong>範例</strong></td>
    </tr>
  )
}

function CommandInfo (props: CommandInfoProps) {
  let outputAliases = '';
  let outputUsage = '';
  if (!props.aliases?.length) outputAliases = '-'
  else for (const alias of props.aliases)
    outputAliases += `<code>z!${alias}</code><br />`;

  if (!props.usage?.length) outputUsage = '-'
  else for (const usage of props.usage)
    outputUsage += `<code>z!${props.cmd} ${usage}</code><br />`;

  return (
    <tr>
      <td><Cmd cmd={props.cmd} /></td>
      <td dangerouslySetInnerHTML={{
        __html: outputAliases
      }}></td>
      <td  dangerouslySetInnerHTML={{
        __html: props.description
      }}></td>
      <td dangerouslySetInnerHTML={{
        __html: outputUsage
      }}></td>
    </tr>
  )
}
/**/
