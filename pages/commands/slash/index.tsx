import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '@/styles/Commands.module.css';
import Header from '@/components/head';
import { SlashTableHeader } from '@/components/commandTableHeader';
import { SlashCommand, SlashCommandInfo } from '@/components/commandInfo';

const SlashCommands: NextPage = () => {
  return (
    <>
      <Header
        title = "斜線指令列表"
        description = "這是 HiZollo 的斜線指令列表，你可以在這裡找到 HiZollo 全部的斜線指令名稱以及說明"
      />
      <h1>HiZollo 的斜線指令列表</h1>
      <Link href="/commands/message"><a>訊息指令</a></Link>｜<strong>斜線指令</strong><br />
      這個指令列表能用 <SlashCommand cmd="help" /> 取得，且能使用 <SlashCommand cmd="help [指令名稱]" /> 獲得更詳細的說明。
      <InfoTable />
      <hr />
      <FunctionTable />
      <hr />
      <EntertainTable />
      <hr />
      <GameTable />
      <hr />
      <NetworkTable />
      <hr />
      <ContactTable />
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
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "announcement"
            description = "閱讀官方公告"
          />
          <SlashCommandInfo
            cmd = "botinfo"
            description = "查看機器人資訊"
          />
          <SlashCommandInfo
            cmd = "dev"
            description = "檢視開發團隊清單"
          />
          <SlashCommandInfo
            cmd = "help"
            description = "開啟指令清單"
          />
          <SlashCommandInfo
            cmd = "links"
            description = "取得機器人相關連結"
          />
          <SlashCommandInfo
            cmd = "name"
            description = "機器人叫什麼名字呢"
          />
        </tbody>
      </table>
    </>
  );
}

function ContactTable() {
  return (
    <>
      <h2>聯繫</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "bug"
            description = "回報錯誤"
          />
          <SlashCommandInfo
            cmd = "suggest"
            description = "傳送建議到後台"
          />
        </tbody>
      </table>
    </>
  );
}

function NetworkTable() {
  return (
    <>
      <h2>HiZollo 聯絡網</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "guildrop"
            description = "傳送訊息至指定伺服器"
          />
          <SlashCommandInfo
            cmd = "hznetwork"
            description = "查看 HiZolllo Network 的即時資訊"
          />
        </tbody>
      </table>
    </>
  )
}

function FunctionTable() {
  return (
    <>
      <h2>功能</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "avatar"
            description = "顯示一或多名用戶的頭像"
          />
          <SlashCommandInfo
            cmd = "buttonrole"
            description = "產生手動取得身分組的按鈕，如果上一則訊息有同種按鈕，按鈕會自動併入，一則訊息最多可以擁有 5 個按鈕"
          />
          <SlashCommandInfo
            cmd = "calc"
            description = "計算一串算式"
          />
          <SlashCommandInfo
            cmd = "choose"
            description = "多選一"
          />
          <SlashCommandInfo
            cmd = "deletemsg"
            description = "在指定時間後刪除此指令的前一則訊息"
          />
          <SlashCommandInfo
            cmd = "getmsg"
            description = "將伺服器最近訊息匯出為指定格式的檔案，可以是文字檔或 JSON 檔案"
          />
          <SlashCommandInfo
            cmd = "purge"
            description = "刪除指定數量的訊息"
          />
          <SlashCommandInfo
            cmd = "server"
            description = "取得伺服器資訊"
          />
          <SlashCommandInfo
            cmd = "userinfo"
            description = "取得用戶資訊"
          />
          <SlashCommandInfo
            cmd = "vote"
            description = "讓 HiZollo 幫你發起一個投票"
          />
        </tbody>
      </table>
    </>
  );
}

function EntertainTable() {
  return (
    <>
      <h2>娛樂</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "8ball"
            description = "詢問神奇的八號球"
          />
          <SlashCommandInfo
            cmd = "coin"
            description = "擲一枚硬幣"
          />
          <SlashCommandInfo
            cmd = "confession"
            description = "向伺服器中的一位用戶告白"
          />
          <SlashCommandInfo
            cmd = "dice"
            description = "擲骰子"
          />
          <SlashCommandInfo
            cmd = "fact"
            description = "查看一個事實，可鍵入分類以查看特定種類的事實，目前有 anecdote、discord、human、hz、math、nature、subject、world 共 8 種分類"
          />
          <SlashCommandInfo
            cmd = "react"
            description = "讓 HiZollo 為前一則訊息反應個表情"
          />
          <SlashCommandInfo
            cmd = "repeat"
            description = "讓機器人複讀你的話"
          />
          <SlashCommandInfo
            cmd = "say"
            description = "讓機器人說一句指定的話"
          />
          <SlashCommandInfo
            cmd = "throwball"
            description = "把球砸向你討厭的人"
          />
          <SlashCommandInfo
            cmd = "youtube"
            description = "跟朋友一起在 Discord 中觀看 Youtube 的影片"
          />
        </tbody>
      </table>
    </>
  );
}

function GameTable() {
  return (
    <>
      <h2>遊戲</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
            <SlashCommandInfo
              cmd = "bullsandcows"
              description = "遊玩一場猜 AB 遊戲，可加上 hard 指定為困難模式"
            />
            <SlashCommandInfo
              cmd = "finalcode"
              description = "開啟一場終極密碼遊戲"
            />
            <SlashCommandInfo
              cmd = "fliptrip"
              description = "遊玩指定棋子數量的 Flip Trip"
            />
            <SlashCommandInfo
              cmd = "gomoku"
              description = "	與朋友遊玩 13x13 的五子棋"
            />
            <SlashCommandInfo
              cmd = "lightsup"
              description = "遊玩一場點燈遊戲"
            />
            <SlashCommandInfo
              cmd = "tictactoe"
              description = "跟 HiZollo 或是另一位用戶遊玩井字遊戲"
            />
          </tbody>
        </table>
      </>
    )
  }

  function MiscellaneousTable() {
    return (
      <>
        <h2>雜項</h2>
        <table className={styles['slashlist-table']}>
          <SlashTableHeader />
          <tbody>
            <SlashCommandInfo
              cmd = "ping"
              description = "取得 Ping 值"
            />
            <SlashCommandInfo
              cmd = "refresh"
              description = "重刷 HiZollo 的動態"
            />
            <SlashCommandInfo
              cmd = "rip"
              description = "Rest In Peace!"
            />
            <SlashCommandInfo
              cmd = "thinking"
              description = "讓機器人送出一個表情庫的思考中表情，你也可以鍵入種類讓他輸出特定的思考表情"
            />
            <SlashCommandInfo
              cmd = "useless"
              description = "Useless."
            />
          </tbody>
      </table>
    </>
  )
}

function SubcommandTable() {
  return (
    <>
      <h2>指令群</h2>
      <table className={styles['slashlist-table']}>
        <SlashTableHeader />
        <tbody>
          <SlashCommandInfo
            cmd = "diep fact"
            description = "獲得一個 Diep.io 的小知識"
          />
          <SlashCommandInfo
            cmd = "diep random"
            description = "隨機抽取一台 Diep.io 的坦克"
          />
          <SlashCommandInfo
            cmd = "diep server"
            description = "顯示 Diep.io 繁中維基的官方伺服器連結"
          />
          <SlashCommandInfo
            cmd = "diep tank"
            description = "查看一台 Diep.io 的坦克資訊"
          />
          <SlashCommandInfo
            cmd = "diep wiki"
            description = "取得 Diep.io 繁中維基的連結"
          />
          <SlashCommandInfo
            cmd = "osu best"
            description = "取得一名玩家在 osu! 上最高成績的資料"
          />
          <SlashCommandInfo
            cmd = "osu user"
            description = "取得一名玩家的 osu! 資料"
          />
        </tbody>
      </table>
    </>
  );
}

export default SlashCommands;
