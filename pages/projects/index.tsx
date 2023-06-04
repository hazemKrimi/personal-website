import { getProjects } from '../../utils/projects';
import { useRouter } from 'next/router';
import { Wrapper } from '../../styles/projects';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import Head from 'next/head';

interface Props {
	projects: {
		title: string;
		description: string;
		image?: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
}

const Index = ({ projects }: Props) => {
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
				<title>Projects | Hazem Krimi</title>
			</Head>
			<Wrapper>
				<div className='back' onClick={() => router.back()}>
					<IconButton alt='Back' icon='/icons/arrow-left.svg' />
					<span>Back</span>
				</div>
				<h1>Projects</h1>
				<div className='projects-wrapper'>
					{projects.length !== 0 ? (
						projects.map(({ slug, ...rest }) => (
							<Card {...rest} key={slug} href={`/projects/${slug}`} />
						))
					) : (
						<h4>Nothing for now</h4>
					)}
				</div>
			</Wrapper>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const projects = getProjects();
	return {
		props: {
			projects
		}
	};
};
