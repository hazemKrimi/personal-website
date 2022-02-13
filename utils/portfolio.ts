import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioProjects = path.join(process.cwd(), '_portfolio');

export const getPortfolioProjects = () => {
	try {
		const fileNames = fs.readdirSync(portfolioProjects);

		if (!fileNames) return [];

		const allPortfolioProjectsData = fileNames.map(filename => {
			const slug = filename.replace('.mdx', '');

			const fullPath = path.join(portfolioProjects, filename);
			const fileContents = fs.readFileSync(fullPath, 'utf8');
			const { data } = matter(fileContents);

			const options = { month: 'long', day: 'numeric', year: 'numeric' };
			// @ts-ignore
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
	} catch {
		return [];
	}
};

export const getPortfolioPorjectsSlugs = () => {
	try {
		const fileNames = fs.readdirSync(portfolioProjects);

		if (!fileNames) return [];

		return fileNames.map(filename => {
			return {
				params: {
					slug: filename.replace('.mdx', '')
				}
			};
		});
	} catch {
		return [];
	}
};

export const getPortfolioProjectdata = async (slug: string) => {
	try {
		const fullPath = path.join(portfolioProjects, `${slug}.mdx`);
		const postContent = fs.readFileSync(fullPath, 'utf8');

		if (!postContent) return undefined;

		return postContent;
	} catch {
		return undefined;
	}
};
