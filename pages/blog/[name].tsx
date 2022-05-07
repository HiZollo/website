import type { NextPage, GetServerSideProps } from 'next';
import { readFileSync } from 'fs';
import Header from '../../components/head'
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  name: string,
  title?: string,
  content?: string
}

const BlogContent: NextPage<BlogContentProps> = (props) => {
  return (
    <>
      <Header
        title={`開發日誌：${props.title}`}
        description="HiZollo 開發人員所撰寫的開發日誌，可能是最新開發進度、HiZollo 的小秘密、技術名詞解說，或是日常發牢騷"
      />
      <ReactMarkdown>
        {props.content ?? ''}
      </ReactMarkdown>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params!;

  try {
    const content = readFileSync(`${process.cwd()}/public/blog/${name}.md`, 'utf-8');
    const title = content.split('\n')[0].slice(1);
    return {
      props: { name, title, content }
    }
  } catch(e) {
    return { notFound: true }
  }
}

export default BlogContent;
