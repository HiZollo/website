import type { NextPage } from 'next';
import Link from 'next/link';
import { Divider } from '@mui/material'

const TutorialNav: NextPage = () => {
  return (
    <>
      <Divider color="white" sx={{ mt: '20px' }} />
      <table id="tutorial-nav">
        <thead>
          <tr>
            <th>分類</th>
            <th>內容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>基本</td>
            <td>
              <Link href="/tutorials/invite">
                <a>邀請 HiZollo</a>
              </Link>・
              <Link href="/tutorials/commands">
                <a>指令清單及一般指令</a>
              </Link>・
              <Link href="/tutorials/command-help">
                <a>指令用法的查詢</a>
              </Link>
            </td>
          </tr>

          <tr>
            <td>進階</td>
            <td>
              <Link href="/tutorials/subcommands">
                <a>指令群</a>
              </Link>・
              <Link href="/tutorials/command-aliases">
                <a>指令別名</a>
              </Link>・
              <Link href="/tutorials/subcommand-shortcuts">
                <a>群組指令捷徑</a>
              </Link>
            </td>
          </tr>

          <tr>
            <td>特殊</td>
            <td>
              <Link href="/tutorials/hidden-commands">
                <a>隱藏指令</a>
              </Link>・
              <Link href="/tutorials/support-server">
                <a>支援伺服器</a>
              </Link>・
              <Link href="/tutorials/hzscript">
                <a>HiZollo Script</a>
              </Link>
            </td>
          </tr>

          <tr>
            <td>斜線指令</td>
            <td>
              <Link href="/tutorials/slash-start">
                <a>開始使用</a>
              </Link>・
              <Link href="/tutorials/slash-help">
                <a>指令用法的查詢</a>
              </Link>・
              <Link href="/tutorials/slash-z-command">
                <a>斜線 Z 指令</a>
              </Link>
            </td>
          </tr>

          <tr>
            <td>HiZollo 聯絡網</td>
            <td>
              <Link href="/tutorials/guildrop">
                <a>HiZollo Guild Drop</a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}


export default TutorialNav;
