import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Commands.module.css';

const SlashCommands: NextPage = () => {
  return (
    <>
      <Head>
        <title>Junior HiZollo｜斜線指令列表</title>
      </Head>
      <h1>HiZollo 的指令列表</h1>
      <Link href="/commands/message"><a>訊息指令</a></Link>｜<strong>斜線指令</strong><br />
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
      <EntertainTable />
      <hr />
      <GameTable />
      <hr />
      <MiscellaneousTable />
      <hr />
      <SubcommandTable />
    </>
  );
}

function InfoTable () {
  return (
    <>
      <h2>資訊</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "announcement"
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
        />
        <CommandInfo
          cmd = "links"
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
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "bug"
          description = "回報錯誤"
        />
        <CommandInfo
          cmd = "suggest"
          description = "傳送建議到後台"
        />
      </table>
    </>
  );
}

function NetworkTable() {
  return (
    <>
      <h2>HiZollo 聯絡網</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "guildrop"
          description = "傳送訊息至指定伺服器"
        />
      </table>
    </>
  )
}

function ManageTable() {
  return (
    <>
      <h2>管理</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "addrole"
          description = "為使用者新增身份"
        />
        <CommandInfo
          cmd = "ban"
          description = "封鎖一位用戶"
        />
        <CommandInfo
          cmd = "kick"
          description = "踢出一位用戶"
        />
        <CommandInfo
          cmd = "removerole"
          description = "把一位使用者的身份移除"
        />
        <CommandInfo
          cmd = "unban"
          description = "解除封鎖一位用戶\n（由於無法 tag 他，必須使用 ID）"
        />
      </table>
    </>
  );
}

function FunctionTable() {
  return (
    <>
      <h2>功能</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "avatar"
          description = "顯示一或多名用戶的頭像"
        />
        <CommandInfo
          cmd = "calc"
          description = "計算一串算式"
        />
        <CommandInfo
          cmd = "choose"
          description = "多選一"
        />
        <CommandInfo
          cmd = "getmsg"
          description = "將伺服器最近訊息匯出為指定格式的檔案，可以是文字檔或 JSON 檔案"
        />
        <CommandInfo
          cmd = "purge"
          description = "刪除指定數量的訊息"
        />
        <CommandInfo
          cmd = "server"
          description = "取得伺服器資訊"
        />
        <CommandInfo
          cmd = "userinfo"
          description = "取得用戶資訊"
        />
        <CommandInfo
          cmd = "vote"
          description = "讓 HiZollo 幫你發起一個投票"
        />
      </table>
    </>
  );
}

function EntertainTable() {
  return (
    <>
      <h2>娛樂</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "8ball"
          description = "詢問神奇的八號球"
        />
        <CommandInfo
          cmd = "coin"
          description = "擲一枚硬幣"
        />
        <CommandInfo
          cmd = "confession"
          description = "向伺服器中的一位用戶告白"
        />
        <CommandInfo
          cmd = "dice"
          description = "擲骰子"
        />
        <CommandInfo
          cmd = "fact"
          description = "查看一個事實，可鍵入分類以查看特定種類的事實，目前有 anecdote、discord、human、hz、math、nature、subject、world 共 8 種分類"
        />
        <CommandInfo
          cmd = "react"
          description = "讓 HiZollo 為前一則訊息反應個表情"
        />
        <CommandInfo
          cmd = "repeat"
          description = "讓機器人複讀你的話"
        />
        <CommandInfo
          cmd = "say"
          description = "讓機器人說一句指定的話"
        />
        <CommandInfo
          cmd = "throwball"
          description = "把球砸向你討厭的人"
        />
        <CommandInfo
          cmd = "youtube"
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
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "fliptrip"
          description = "遊玩指定棋子數量的 Flip Trip"
        />
        <CommandInfo
          cmd = "gomoku"
          description = "	與朋友遊玩 13x13 的五子棋"
        />
        <CommandInfo
          cmd = "guessab"
          description = "遊玩一場猜 AB 遊戲，可加上 hard 指定為困難模式"
        />
        <CommandInfo
          cmd = "lightsup"
          description = "遊玩一場點燈遊戲"
        />
        <CommandInfo
          cmd = "tictactoe"
          description = "跟 HiZollo 或是另一位用戶遊玩井字遊戲"
        />
      </table>
    </>
  )
}

function MiscellaneousTable() {
  return (
    <>
      <h2>雜項</h2>
      <table className={styles['slashlist-table']}>
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
        />
        <CommandInfo
          cmd = "useless"
          description = "Useless."
        />
      </table>
    </>
  )
}

function SubcommandTable() {
  return (
    <>
      <h2>指令群</h2>
      <table className={styles['slashlist-table']}>
        <TableHeader />
        <CommandInfo
          cmd = "diep fact"
          description = "獲得一個 Diep.io 的小知識"
        />
        <CommandInfo
          cmd = "diep random"
          description = "隨機抽取一台 Diep.io 的坦克"
        />
        <CommandInfo
          cmd = "diep server"
          description = "顯示 Diep.io 繁中維基的官方伺服器連結"
        />
        <CommandInfo
          cmd = "diep tank"
          description = "查看一台 Diep.io 的坦克資訊"
        />
        <CommandInfo
          cmd = "diep wiki"
          description = "取得 Diep.io 繁中維基的連結"
        />
        <CommandInfo
          cmd = "osu best"
          description = "取得一名玩家在 osu! 上最高成績的資料"
        />
        <CommandInfo
          cmd = "osu user"
          description = "取得一名玩家的 osu! 資料"
        />
      </table>
    </>
  );
}

export default SlashCommands;

/***** Utils *****/
interface CommandNameProps {
  cmd: string;
}

interface SlashCommandInfoProps {
  cmd: string;
  description: string;
}

function Cmd (props: CommandNameProps) {
  return <code>/{props.cmd}</code>
}

function TableHeader () {
  return (
    <tr>
      <td className={styles['slashlist-header']}><strong>指令</strong></td>
      <td className={styles['slashlist-header']}><strong>指令說明</strong></td>
    </tr>
  )
}

function CommandInfo (props: SlashCommandInfoProps) {
  return (
    <tr>
      <td><Cmd cmd={props.cmd} /></td>
      <td  dangerouslySetInnerHTML={{
        __html: props.description
      }}></td>
    </tr>
  )
}
/**/
