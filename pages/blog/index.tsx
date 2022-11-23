import type { NextPage } from 'next';
import Link from 'next/link';
import { readdirSync, readFileSync } from 'fs';
import { Card, CardHeader, CardContent, Stack, Divider } from '@mui/material';
import Header from '@/components/head'
import style from '@/styles/Blog.module.css';

interface BlogPageProps {
  blogList: Array<[string, string]>
}

const BlogPage: NextPage<BlogPageProps> = (props: BlogPageProps) => {
  return <>
    <Header
      title="開發日誌"
      description="HiZollo 開發人員所撰寫的開發日誌，可能是最新開發進度、HiZollo 的小秘密、技術名詞解說，或是日常發牢騷"
    />
    <h1>開發日誌</h1>
    這裡是 HiZollo 的開發日誌，當開發者很閒時可能就會寫一篇丟在這裡。不保證更新頻率。
    <Stack
      direction={{ xs: "column", sm: "row"}}
      alignItems={{ xs: "center", sm: "inherit" }}
      mt={3}
      spacing={2}
      divider={<Divider color="white" orientation="vertical" flexItem />}
    >
    {
      props.blogList
        .sort()
        .reverse()
        .map(([ name, data ], i) => 
          <Card key={i} sx={{ maxWidth: 330 }} className={style['blog-card']}>
            <CardHeader
              sx={{ paddingLeft: 3 }}
              title={
                <Link href={`/blog/${name.substring(0, name.length-3)}`}>
                  {data.split('\n')[0].slice(1) }
                </Link>
              }
            />
            <CardContent>
              { data.length > 50 ? `${data.substring(0, 50)}...` : data }
              <Link
                href={`/blog/${name.substring(0, name.length-3)}`}
                style={{ whiteSpace: 'nowrap' }}>
                （繼續閱讀）
              </Link>
            </CardContent>
          </Card>
        )
    }
    </Stack>
  </>;
}

export async function getStaticProps() {
  const blogs = readdirSync(`${process.cwd()}/public/blog`).filter(file => file.endsWith('.md'));
  const blogList: Array<[string, string]> = [];

  for (const blog of blogs) {
    const data = readFileSync(`${process.cwd()}/public/blog/${blog}`, 'utf-8');
    blogList.push([blog, data]);
  }

  return {
    props: { blogList }
  }
}

export default BlogPage;
