import type { NextPage } from 'next';
import Link from 'next/link';
import TutorialNav from '../../components/TutorialNav';

const Tutorials: NextPage = () => {
  return (
    <>
      <h1>使用教學</h1>
      這裡是 HiZollo 的使用教學，如果你不知道怎麼使用 HiZollo，或是你想發揮 HiZollo 全部的功能，你一定要看這裡。
      <TutorialNav />
    </>
  );
}
export default Tutorials;
