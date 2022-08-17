import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '@/components/head';
import { TableHeader } from '@/components/commandTableHeader';
import { MessageCommand, CommandInfo } from '@/components/commandInfo';
import styles from '@/styles/Commands.module.css';

const DiepCommand: NextPage = () => {
  return (
    <>
      <Header
        title = "Diep 指令列表"
        description = "這是 HiZollo 的 diep 指令列表，你可以在這裡找到 HiZollo 全部的 diep 指令名稱以及相關說明"
      />
      <h1>HiZollo 的 Diep 指令列表</h1>
      <Link href="/commands/message">
        <a>回上頁</a>
      </Link><br />
      這個指令列表能用 <MessageCommand cmd="diep" /> 取得並獲得更詳細的說明。
      <table className={styles['helplist-table']}>
        <TableHeader />
        <tbody>
          <CommandInfo
            cmd = "diep fact"
            description = "獲得一個 Diep.io 的小知識"
          />
          <CommandInfo
            cmd = "diep random"
            aliases = {['diep rt']}
            description = "隨機抽取 Diep.io 的坦克，需指定分類"
            usage = {['diep rt normal']}
          />
          <CommandInfo
            cmd = "diep server"
            aliases = {['diep discord']}
            description = "Diep.io 繁中維基的官方 Discord 群組邀請"
          />
          <CommandInfo
            cmd = "diep tank"
            description = "查看一台 Diep.io 坦克的資訊"
          />
          <CommandInfo
            cmd = "diep wiki"
            description = "獲得 Diep.io 繁中維基的連結"
          />
        </tbody>
      </table>
    </>
  )
}

export default DiepCommand;
