import type { NextPage } from 'next'
import Link from 'next/link';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <header>
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
