import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MDXContent from './MDXContent';

export default async function PostPage({ params }) {
  const { slug } = params;
  const postData = await getPostData(slug);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        {postData.frontmatter.title}
      </h1>
      <MDXContent content={postData.content} />
    </div>
  );
}

// This function generates static paths for the dynamic routes
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx?$/, ""), // Remove .md or .mdx extension
  }));

  return paths.map((path) => ({ params: path }));
}

// This function fetches the content of the specific blog post
async function getPostData(slug) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}
