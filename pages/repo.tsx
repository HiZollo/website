import type { NextPage } from 'next';

import Redirect from '@/components/redirect';

const Repo: NextPage = () => {
  return <Redirect url={process.env.repoUrl ?? ''} title="官方網站原始碼" description="想一窺 HiZollo 的官方網站是怎麼寫的嗎？你可以在這裡它的原始碼" />
}

export default Repo;
