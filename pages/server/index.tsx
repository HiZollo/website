import type { NextPage } from 'next';
import Redirect from '@/components/redirect'

const Server: NextPage = () => {
  return <Redirect url={process.env.serverUrl} title="後臺支援伺服器" description="這是 HiZollo 的官方支援伺服器，你可以在這裡詢問問題、請求協助，或跟一堆人一起講幹話" />
}

export default Server;
