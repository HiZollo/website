import type { NextPage, GetServerSideProps } from 'next';
import { readFileSync } from 'fs';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  name: string,
  content?: string
}

const BlogContent: NextPage<BlogContentProps> = (props) => {
  return (
    <>
      <ReactMarkdown>
        {props.content ?? ''}
      </ReactMarkdown>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.params!;

  try {
    const content = readFileSync(`./public/blog/${name}.md`, 'utf-8');
    return {
      props: { name, content }
    }
  } catch(e) {
    return { notFound: true }
  }
}

export default BlogContent;
