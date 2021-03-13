import Card from "../../components/UI/Card";
import "./style.css";
import postImage from "../../blogPostImages/memories-from.jpg";
import Sidebar from "../../components/Sidebar";

const Home = (props) => {
  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card>
        <div className="galleryPost" style={galleryStyle}>
          <section style={{ width: "70%" }}>
            <div>
              <img src={postImage} alt="test image" />
            </div>
          </section>
          <section className={"sideImageWrapper"} style={{ width: "30%" }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={postImage} alt="test image" />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={postImage} alt="test image" />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={postImage} alt="test image" />
            </div>
          </section>
        </div>
      </Card>
      <section className="HomeContainer">
        <div style={{ width: "70%" }}>
          <Card style={{ marginBottom: "20px" }}>Post 1</Card>
          <Card style={{ marginBottom: "20px" }}>Post 2</Card>
        </div>
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
