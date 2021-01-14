import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioProjects = path.join(process.cwd(), '_portfolio');

export const getPortfolioProjects = () => {
	const fileNames = fs.readdirSync(portfolioProjects);

	const allPortfolioProjectsData = fileNames.map(filename => {
		const slug = filename.replace('.mdx', '');

		const fullPath = path.join(portfolioProjects, filename);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data } = matter(fileContents);

		const options = { month: 'long', day: 'numeric', year: 'numeric' };
		const formattedDate = new Date(data.date).toLocaleDateString('en-IN', options);

		const frontmatter = {
			...data,
			date: formattedDate
		};
		return {
			slug,
			...frontmatter
		};
	});

	return allPortfolioProjectsData.sort((a, b) => {
		if (new Date(a.date) < new Date(b.date)) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getPortfolioPorjectsSlugs = () => {
	const fileNames = fs.readdirSync(portfolioProjects);

	return fileNames.map(filename => {
		return {
			params: {
				slug: filename.replace('.mdx', '')
			}
		};
	});
};

export const getPortfolioProjectdata = async (slug: string) => {
	const fullPath = path.join(portfolioProjects, `${slug}.mdx`);
	const postContent = fs.readFileSync(fullPath, 'utf8');

	return postContent;
};
