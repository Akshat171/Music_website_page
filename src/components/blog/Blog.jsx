import SectionHeader from "../SectionHeader";
import PostList from "./PostList";

const getPosts = async () => {
  const res = await fetch("https://music-data-1j4p.onrender.com/posts");
  return res.json();
};
const Blog = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className="section" id="blog">
      <div className="container mx-auto">
        <SectionHeader pretitle="Our Blogs" title="Latest News" />
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default Blog;
