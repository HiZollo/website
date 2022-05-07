import type { NextPage } from 'next';
import Link from 'next/link';
import { readdirSync, readFileSync } from 'fs';
import { Card, CardHeader, CardContent, Stack, Divider } from '@mui/material';
import style from '../../styles/Blog.module.css';

interface BlogPageProps {
  blogList: Array<[string, string]>
}

const BlogPage: NextPage<BlogPageProps> = (props: BlogPageProps) => {
  return (
    <>
      <h1>開發日誌</h1>
      這裡是 HiZollo 的開發日誌，當開發者很閒時可能就會寫一篇丟在這裡。不保證更新頻率。
      <Stack
        direction="row"
        mt={3}
        spacing={2}
        divider={<Divider color="white" orientation="vertical" flexItem />}
      >
      {
        props.blogList.map(([ name, data ], i) => {
          return (
            <Card key={i} sx={{ maxWidth: 330 }} className={style['blog-card']}>
              <CardHeader
                sx={{ paddingLeft: 3 }}
                title={
                  <Link href="###">
                    <a>{data.split('\n')[0].slice(1) }</a>
                  </Link>
                }
              />
              <CardContent>
                { data.length > 50 ? `${data.substring(0, 50)}...` : data }
                <Link href={`blog/${name.substring(0, name.length-3)}`}>
                  <a>（繼續閱讀）</a>
                </Link>
              </CardContent>
            </Card>
          )
        })
      }
      </Stack>
    </>
  );
}

export async function getStaticProps() {
  const blogs = readdirSync('./public/blog').filter(file => file.endsWith('.md'));
  const blogList: Array<[string, string]> = [];

  for (const blog of blogs) {
    const data = readFileSync(`./public/blog/${blog}`, 'utf-8');
    blogList.push([blog, data]);
  }

  return {
    props: { blogList }
  }
}

export default BlogPage;
