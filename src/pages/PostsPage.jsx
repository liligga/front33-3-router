import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return <div>PostsPage
    <ul className="posts-list">
      {posts.map((post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>;
};
export default PostsPage;
