import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../../../components/head';
import { TableHeader } from '../../../components/commandTableHeader';
import { Cmd, CommandInfo } from '../../../components/commandInfo';
import styles from '../../../styles/Commands.module.css';

const DiepCommand: NextPage = () => {
  return (
    <>
      <Header
        title = "音樂指令列表"
        description = "這是 HiZollo 的音樂指令列表，你可以在這裡找到 HiZollo 全部的音樂指令名稱以及相關說明"
      />
      <h1>HiZollo 的音樂指令列表</h1>
      <Link href="/commands/message">
        <a>回上頁</a>
      </Link><br />
      這個指令列表能用 <Cmd cmd="music" /> 取得並獲得更詳細的說明。
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "music join"
            description = "加入指令使用者所在的語音頻道，若加入的是舞台頻道，可以額外指定 false 參數讓機器人只有播歌時成為發言者"
            usage = {['', 'false']}
          />
          <CommandInfo
            cmd = "music leave"
            aliases = {['music l']}
            description = "讓機器人離開語音頻道"
          />
          <CommandInfo
            cmd = "music play"
            aliases = {['music p']}
            description = "播放指定 Youtube 影片的聲音，也可以搜尋或播放整個清單"
            usage = {['Hanon x Kotoha']}
          />
          <CommandInfo
            cmd = "music playlist"
            aliases = {['music pl']}
            description = "顯示目前的播放清單"
          />
          <CommandInfo
            cmd = "music remove"
            description = "移除隊列中的歌曲"
            usage = {['', '2']}
          />
        </tbody>
      </table>
    </>
  )
}

export default DiepCommand;
