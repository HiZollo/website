import type { NextPage } from 'next';
import Head from 'next/head';

interface HeadProps {
  title?: string,
  description?: string
}

const Header: NextPage<HeadProps> = (props: HeadProps) => {
  const title = `Junior HiZollo｜${props.title ?? '一個完整的 Discord 機器人'}`;
  const {
    description = 'Junior HiZollo 是個功能完整的 Discord 機器人，可以為你管理身份組、增加伺服器樂趣等。還不快邀請他進入你的伺服器！'
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#94B4FA" />
      <meta name="author" content="HiZollo Dev Team" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Junior,HiZollo,Discord,機器人,聊天,音樂,管理,娛樂" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://hizollo.ddns.net/pic/image.png" />
      <meta property="og:url" content="http://hizollo.ddns.net" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://hizollo.ddns.net/pic/image.png" />
      <meta name="twitter:url" content="https://hizollo.ddns.net/" />
    </Head>
  )
}


export default Header;
