import type { NextPage } from 'next';
import Header from '../../components/head';
import Link from 'next/link';

const Playground: NextPage = () => {
	return (
    <>
      <Header 
        title="線上測試區"
        description="這裡是 HiZollo 開發團隊提供的線上測試區，你可以在這邊測試一些功能。"
      />
      <h1>線上測試區</h1>
      這裡提供了一些 HiZollo 的功能，讓你能夠在網頁上測試 HiZollo 的一些小功能。目前有以下可以遊玩：
      <ul>
        <li><Link href="/playground/hzscript">HiZollo Script 線上測試區</Link></li>
      </ul>
    </>
	)
}

export default Playground;