import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Header from '../../components/head';


const paths = {
  'invite': 'https://discord.com/oauth2/authorize?client_id=584677291318312963&permissions=1636382010871&scope=bot+applications.commands',
  'server': 'https://discord.com/invite/xUXTrYG2MZ',
  'dst': 'https://discordservers.tw/bots/584677291318312963',
  'repo': 'https://github.com'
};


const Invite: NextPage = () => {
  const router = useRouter();
  const { url } = router.query;
  const [title, description] =
    url === 'invite' ? ['邀請 HiZollo', '將 HiZollo 邀請至你的伺服器'] :
    url === 'server' ? ['後臺支援伺服器', '這是 HiZollo 的官方支援伺服器，你可以在這裡詢問問題、請求協助，或跟一堆人一起講幹話'] :
    url === 'dst' ? ['DST 頁面', 'HiZollo 在 DiscordTw 上的介紹頁面，請為我們投下你神聖的一票！'] :
    url === 'repo' ? ['官方網站原始碼', '想一窺 HiZollo 的官方網站是怎麼寫的嗎？你可以在這裡它的原始碼'] : ['重定向', '無效的重定向頁面'];

  useEffect(() => {
    window.location.href = paths[url] ?? '/';
  });

  return (
    <>
      <Header title={title} description={description} />
      <h3>正在將你重定向至：<a href={paths[url] ?? '/'}>{paths[url] ?? '/'}</a></h3>
      <h3>如果沒有成功，請<a href={paths[url] ?? '/'}>點此</a>跳轉</h3>
    </>
  )
}

export default Invite;
