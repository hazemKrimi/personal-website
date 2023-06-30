import { useEffect } from 'react';
import { getBlogPostsSlugs, getBlogPostdata } from '../../utils/blog';
import { useRouter } from 'next/router';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { Wrapper } from '../../styles/blog/slug';
import matter from 'gray-matter';
import Head from 'next/head';
import IconButton from '../../components/IconButton';
import CodeBlock from '../../components/CodeBlock';
import readingTime from 'reading-time';
import Image from 'next/image';

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
  text: string;
}

const BlogPost = ({ source, frontMatter, text }: Props) => {
  const router = useRouter();
  const stats = readingTime(text);
  const htmlOverrides = { code: CodeBlock };
  const mdxComponents = {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Hazem Krimi' />
        <meta
          name='description'
          content={
            frontMatter?.description
              ? frontMatter.description
              : `Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.`
          }
        />
        <link rel='canonical' href='https://hazemkrimi.tech' />
        <meta property='og:image' content='/logo.png' />
        <meta
          property='og:description'
          content={
            frontMatter?.description
              ? frontMatter.description
              : `Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.`
          }
        />
        <meta
          property='og:title'
          content={`${frontMatter?.title} | Hazem Krimi`}
        />
        <meta
          name='keywords'
          content={
            frontMatter?.tags
              ? frontMatter.tags.join(' ')
              : `Hazem, Krimi, Hazem Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, TypeScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News, Software Developer, Software Engineer, Full Stack TypeScript Developer, Next.js`
          }
        />
        <title>{`${frontMatter?.title} | Hazem Krimi`}</title>
      </Head>
      <Wrapper>
        <div className='meta'>
          <div className='back' onClick={() => router.back()}>
            <IconButton alt='Back' icon='/icons/arrow-left.svg' />
            <span>Back</span>
          </div>
          <h1>{frontMatter?.title}</h1>
          <p>{frontMatter?.description}</p>
          <p>
            By <b>{frontMatter?.author}</b> on <b>{frontMatter?.date}</b> (
            {stats.text})
          </p>
          {frontMatter?.tags ? (
            <div className='tags-wrapper'>
              {frontMatter.tags.map((tag: string, index: number) => (
                <span key={index}>#{tag}&nbsp;</span>
              ))}
            </div>
          ) : null}
          {frontMatter?.image ? (
            <div className='image'>
              <Image alt={frontMatter?.title} src={frontMatter?.image} fill />
            </div>
          ) : null}
          <hr />
        </div>
        <MDXProvider components={{ ...htmlOverrides, ...mdxComponents }}>
          <div className='content'>
            <MDXRemote {...source} />
          </div>
        </MDXProvider>
      </Wrapper>
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getBlogPostsSlugs();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const blogPostContent = await getBlogPostdata(params.slug);

  if (!blogPostContent)
    return {
      props: {
        source: undefined,
        frontMatter: undefined,
      },
    };

  const { data, content } = matter(blogPostContent);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      text: content,
    },
  };
};
