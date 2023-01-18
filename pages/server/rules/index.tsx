import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '@/components/head';

const Rules: NextPage = () => {
  return (
    <>
      <Header
        title="HiZollo 官方伺服器規則"
        description="HiZollo 官方伺服器的規則，加入伺服器請務必閱讀喔！"
      />
      <h1>伺服器規則</h1>
      這裡是 HiZollo 官方伺服器的規則，這個規則是被簡化過的大網，一般來說看看這篇就可以了。<br />
      如果你想更清楚知道伺服器是如何運作的，可以參考<Link href="/server/rules/verbose">完整規則</Link>。

      <h2>主要原則</h2>
      <ol>
        <li>請遵守 <a href="https://discord.com/terms">Discord 用戶條款</a>和 <a href="https://discord.com/guidelines">Discord 社區守則</a></li>
        <li>請不要在這個伺服器中傳送 NSFW 的東西</li>
        <li>在這個伺服器中，請勿惡意攻擊、辱罵、抺黑，及造謠</li>
        <li>除了回覆訊息和對方允許外，不要 tag 其它使用者</li>
        <li>請不要在 #指令使用區 以外的地方洗版</li>
        <li>請不要濫開討論串</li>
      </ol>

      <h2>小提示</h2>
      <ol>
        <li>可以到 #身份組提款機 領取通知身份組</li>
        <li>可以到 #問與答 看一些常見問題的回答</li>
        <li>可以在 #聊天室 和大家一起隨便亂聊</li>
        <li>可以到 #討論版 開一些特別的主題和大家討論</li>
      </ol>
    </>
  );
}

export default Rules;

