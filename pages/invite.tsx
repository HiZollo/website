import type { NextPage } from 'next';

import Redirect from '../components/redirect';

const Invite: NextPage = () => {
  return <Redirect url={process.env.inviteUrl ?? ''} title="邀請 HiZollo" description="將 HiZollo 邀請至你的伺服器" />
}

export default Invite;
