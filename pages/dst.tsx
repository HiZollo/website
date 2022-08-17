import type { NextPage } from 'next';

import Redirect from '@/components/redirect';

const DST: NextPage = () => {
  return <Redirect url={process.env.dstUrl ?? ''} title="DST 頁面" description="HiZollo 在 DiscordTw 上的介紹頁面，請為我們投下你神聖的一票！" />
}

export default DST;
