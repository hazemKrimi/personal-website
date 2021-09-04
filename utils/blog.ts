import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogPostsDirectory = path.join(process.cwd(), '_blog');

export const getBlogPosts = () => {
	const fileNames = fs.readdirSync(blogPostsDirectory);

	const allBlogPostsData = fileNames.map(filename => {
		const slug = filename.replace('.mdx', '');

		const fullPath = path.join(blogPostsDirectory, filename);
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

	return allBlogPostsData.sort((a, b) => {
		if (new Date(a.date) < new Date(b.date)) {
			return 1;
		} else {
			return -1;
		}
	});
};

export const getBlogPostsSlugs = () => {
	const fileNames = fs.readdirSync(blogPostsDirectory);

	return fileNames.map(filename => {
		return {
			params: {
				slug: filename.replace('.mdx', '')
			}
		};
	});
};

export const getBlogPostdata = async (slug: string) => {
	const fullPath = path.join(blogPostsDirectory, `${slug}.mdx`);
	const postContent = fs.readFileSync(fullPath, 'utf8');

	return postContent;
};
