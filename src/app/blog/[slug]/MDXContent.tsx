"use client"; // This component is a client component

import { MDXProvider } from "@mdx-js/react";
import ReactMarkdown from "react-markdown";

const MDXContent = ({ content }) => {
  return (
    <MDXProvider>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </MDXProvider>
  );
};

export default MDXContent;
