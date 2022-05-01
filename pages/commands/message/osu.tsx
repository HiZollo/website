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
        title = "osu! 指令列表"
        description = "這是 HiZollo 的 osu! 指令列表，你可以在這裡找到 HiZollo 全部的 osu! 指令名稱以及相關說明"
      />
      <h1>HiZollo 的 osu! 指令列表</h1>
      <Link href="/commands/message">
        <a>回上頁</a>
      </Link><br />
      這個指令列表能用 <Cmd cmd="osu" /> 取得並獲得更詳細的說明。
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "osu best"
            aliases = {['osu bp']}
            description = "查詢一位 Osu! 玩家的 BP 榜前十的數據"
            usage = {['chocomint']}
          />
          <CommandInfo
            cmd = "osu user"
            aliases = {['osu u']}
            description = "查詢一位 Osu! 玩家的個人檔案"
            usage = {['AC0xRPFS001']}
          />
        </tbody>
      </table>
    </>
  )
}

export default DiepCommand;
