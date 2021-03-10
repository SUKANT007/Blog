import Card from "../UI/Card";
import "./style.css";
import profileImage from '../../assets/icons/sukant.jpg'
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
		  <div className="cardHeader">
			  <span>About Us</span>
		  </div>
		  <div className="profileImageContainer">
			  <img src={profileImage} alt="Profile Image"/>
		  </div>
		  <div className="cardBody">
			  <p className="personalBio">My name is Sukant Arora I am a software developer specialization in Algorithms....</p>
		  </div>
	  </Card>
	  <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
		  <div className="cardHeader">
			  <span>Social Network</span>
		  </div>
	  </Card>

	  <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
		  <div className="cardHeader" >
			  <span>Recent Posts</span>
		  </div>
		  <div className="recentPosts">
			  <div className="recentPost">
				  <h3>Post Title</h3>
				  <span>July 21,2018</span>
			  </div>
		  </div>
		  <div className="recentPosts">
			  <div className="recentPost">
				  <h3>Post Title</h3>
				  <span>July 21,2018</span>
			  </div>
		  </div>
		  <div className="recentPosts">
			  <div className="recentPost">
				  <h3>Post Title</h3>
				  <span>July 21,2018</span>
			  </div>
		  </div>
	  </Card>


    </div>
  );
};

export default Sidebar;
