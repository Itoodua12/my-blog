import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Irakli Todua",
};

export default function Blog() {
  return (
    <div>
      <h1 className="blog-heading">Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
          <a href="#" key={post.title} className="post-row">
            <div className="post-main">
              <span className="post-title">{post.title}</span>
              <span className="post-tag">{post.tag}</span>
            </div>
            <span className="post-date">{post.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
