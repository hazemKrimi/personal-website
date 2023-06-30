import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogPostsDirectory = path.join(process.cwd(), '_blog');

export const getBlogPosts = () => {
  try {
    const fileNames = fs.readdirSync(blogPostsDirectory);

    if (!fileNames) return [];

    const allBlogPostsData = fileNames.map((filename) => {
      const slug = filename.replace('.mdx', '');

      const fullPath = path.join(blogPostsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      // @ts-ignore
      const formattedDate = new Date(data.date).toLocaleDateString(
        'en-IN',
        options
      );

      const frontmatter = {
        ...data,
        date: formattedDate,
      };
      return {
        slug,
        ...frontmatter,
      };
    });

    return allBlogPostsData.sort((a, b) => {
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

export const getBlogPostsSlugs = () => {
  try {
    const fileNames = fs.readdirSync(blogPostsDirectory);

    if (!fileNames) return [];

    return fileNames.map((filename) => {
      return {
        params: {
          slug: filename.replace('.mdx', ''),
        },
      };
    });
  } catch {
    return [];
  }
};

export const getBlogPostdata = async (slug: string) => {
  try {
    const fullPath = path.join(blogPostsDirectory, `${slug}.mdx`);
    const postContent = fs.readFileSync(fullPath, 'utf8');

    if (!postContent) return undefined;

    return postContent;
  } catch {
    return undefined;
  }
};
