export interface Post {
  title: string;
  tag: string;
  date: string;
}

export const posts: Post[] = [
  { title: "What I learned shipping side projects", tag: "building", date: "Jun 2026" },
  { title: "A quieter approach to productivity", tag: "life", date: "May 2026" },
  { title: "Notes on writing simpler code", tag: "engineering", date: "Apr 2026" },
  { title: "Why I started this blog", tag: "meta", date: "Mar 2026" },
  { title: "Small habits that stuck", tag: "life", date: "Feb 2026" },
];
