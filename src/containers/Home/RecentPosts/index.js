import "./style.css";
import Card from "../../../components/UI/Card";
const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src={
              "https://cdn.wallpapersafari.com/88/99/bdGzIw.jpg"
            }
            alt="image"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2>Know more about Daily Dose</h2>
          <span>Posted on March 14, 2021 by Adarsh Verma, Praveen Mishra and Sukant Arora.</span>
          <p>
            There are a couple of blogs discussing our project in the most minute of details, and you are always welcome to know more about it by giving our project report a glance.
          </p>
		  <p>PS: The image associated with this post is a random image.</p>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
