import { useState, useEffect } from "react";
import Card from "../UI/Card";
import "./style.css";
import profileImage from "../../assets/icons/sukant.jpg";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div className="sidebarContainer" style={{ width: props.width }}>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img src={profileImage} alt="Profile Image" />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Sukant Arora I am a software developer specialization in
            Algorithms....
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
