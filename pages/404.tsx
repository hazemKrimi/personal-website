import { useRouter } from 'next/router';
import Head from 'next/head';
import IconButton from '../components/IconButton';
import { Wrapper } from '../styles/404';

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='author' content='Hazem Krimi' />
        <meta
          name='description'
          content='Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.'
        />
        <link rel='canonical' href='https://hazemkrimi.tech' />
        <meta property='og:image' content='/logo.png' />
        <meta
          property='og:description'
          content='Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.'
        />
        <meta property='og:title' content='Hazem Krimi' />
        <meta
          name='keywords'
          content='Hazem, Krimi, Hazem Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, TypeScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News, Software Developer, Software Engineer, Full Stack TypeScript Developer, Next.js'
        />
        <title>404 Not Found | Hazem Krimi</title>
      </Head>
      <Wrapper>
        <h1>404: This page could not be found</h1>
        <div className='back' onClick={() => router.push('/')}>
          <IconButton alt='Back' icon='/icons/arrow-left.svg' />
          <span>Go Home</span>
        </div>
      </Wrapper>
    </>
  );
};

export default NotFound;
