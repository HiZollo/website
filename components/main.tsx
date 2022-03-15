import type { NextPage } from 'next'
import Link from 'next/link';
import wordmark from '../public/wordmark.png';
import wordmarkLarge from '../public/wordmark-large.png';
import Image from 'next/image';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <header>
        <div id="wordmark-large">
          <Link href="/">
            <a><Image src={wordmarkLarge} alt="Junior HiZollo" /></a>
          </Link>
        </div>
        <div id="wordmark">
          <Link href="/">
            <a><Image src={wordmark} alt="Junior HiZollo" /></a>
          </Link>
        </div>
        <div id="blank" />
        <Link href="/commands">
          <a>指令列表</a>
        </Link>
        <Link href="/tutorials">
          <a>使用教學</a>
        </Link>
        <Link href="/changelog">
          <a>更新日誌</a>
        </Link>
        <Link href="/developers">
          <a>開發團隊</a>
        </Link>
        <Link href="/tos">
          <a>用戶條款</a>
        </Link>
      </header>

      <main>
        { children }
      </main>

      <BlankDiv />
    </>
  );
}

export default Layout;

function BlankDiv() {
  return <div style={{ height: '100px' }}></div>;
}
