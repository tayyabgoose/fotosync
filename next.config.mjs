/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withMDXConfig(nextConfig);
