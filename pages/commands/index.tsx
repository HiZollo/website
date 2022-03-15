import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Commands: NextPage = () => {
  const router = useRouter();
  router.push('/commands/message');

  return <h1>Redirecting...</h1>
}

export default Commands;
