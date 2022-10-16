import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function setPostsDirectory(type: 'blog' | 'projects') {
  if (type === 'projects') return join(process.cwd(), 'src/_projects');
  return join(process.cwd(), 'src/_posts');
}

export function getPostSlugs(type: 'blog' | 'projects') {
  const postsDirectory = setPostsDirectory(type);
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = [], type: 'blog' | 'projects', tag?: string) {
  const postsDirectory = setPostsDirectory(type);
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  if ((tag && data.tags.includes(tag)) || !tag) {
    const items: Items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug;
      }
      if (field === 'content') {
        items[field] = content;
      }

      if (typeof data[field] !== 'undefined') {
        items[field] = data[field];
      }
    });

    return items;
  }
}

export function getAllPosts(fields: string[] = [], type: 'blog' | 'projects', tag?: string) {
  const slugs = getPostSlugs(type);
  const posts = [];
  slugs.map((slug) => {
    const post = getPostBySlug(slug, fields, type, tag);
    if (post) posts.push(post);
  });
  const sortedPosts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return sortedPosts;
}

async function collateTags() {
  const postsDirectory = setPostsDirectory('blog');
  const files = fs.readdirSync(postsDirectory);
  const allTags = new Set<string>(); // to ensure only unique tags are added

  files.map((postSlug) => {
    const realSlug = postSlug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    data.tags.forEach((tag: string) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export async function getTags() {
  const tags: string[] = await collateTags();
  return tags;
}
