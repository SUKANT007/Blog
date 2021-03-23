import "./style.css";
import Card from "../../../components/UI/Card";
import blogPost from "../../../data/blog.json";
import { useHistory } from "react-router-dom";

const RecentPosts = (props) => {
  let blogArr = blogPost.data;
  blogArr = blogArr.filter((item) => item.blogCategory === "Simple");
  let history = useHistory();

  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={
              "https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"
            }
            alt="image"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Fitness Mantra To Live Fit Life</h2>
          <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
          <p>
            Midst first it, you're multiply divided. There don't, second his one
            given the he one third rule fruit, very. Fill. Seed give firm...
            Extremity direction existence as Dashwood's do up. Securing Marianne
            led welcomed offended but offering six rapt...
          </p>

          <button>Read More</button>
        </div>
      </Card>
      {blogArr.map((post) => {
        return (
          <Card style={{ marginBottom: "20px" }}>
            <div className="postImageWrapper">
              <img
                src={
                  require("../../../blogPostImages/" + post.blogImage).default
                }
                alt="test image"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <span>{post.blogCategory}</span>
              <h2>{post.blogTitle}</h2>
              <span>{post.postedOn}</span>
              <p>{post.blogText}</p>
              {console.log(props)}

              <button onClick={() => history.push("/post/" + post.slug)}>
                Read More
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default RecentPosts;
