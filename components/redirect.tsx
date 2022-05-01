import type { NextPage } from 'next';
import { useEffect } from 'react';

import Header from './head';

interface RedirectProps {
  url: string | undefined,
  title: string,
  description: string
}

const Redirect: NextPage<RedirectProps> = (props: RedirectProps) => {
  const { url = '/', title, description } = props;

  useEffect(() => {
    window.location.href = url;
  });

  return (
    <>
      <Header title={title} description={description} />
      <h3>正在將你重定向至：<a href={url}>{url}</a></h3>
      <h3>如果沒有成功，請<a href={url}>點此</a>跳轉</h3>
    </>
  )
}

export default Redirect;
