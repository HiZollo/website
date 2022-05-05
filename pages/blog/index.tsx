import type { NextPage } from 'next';
import { readdirSync } from 'fs';

const Blog: NextPage = () => {
  return (
    <>
      <h1>開發日誌</h1>
      這裡是 HiZollo 的開發日誌，當開發者很閒時可能就會寫一篇丟在這裡。不保證更新頻率。
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}

export default Blog;
