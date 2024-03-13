import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    };
    getPost();
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      Post ID: {postId} <br />
      Title: {post.title} <br />
      Body: {post.body}
    </div>
  );
};
export default SinglePostPage;
