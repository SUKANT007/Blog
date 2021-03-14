import BlogPost from "../../components/BlogPost";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import "./style.css";
const Post = (props) => {
  console.log(props);
  return (
    <Layout>
      <BlogPost {...props} />
    </Layout>
  );
};

export default Post;
