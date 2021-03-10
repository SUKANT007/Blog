import Card from "../UI/Card";
import "./style.css";
import postImage from '../../blogPostImages/memories-from.jpg'
const BlogPost = () => {
	return (
		<div className="blogPostContainer">
			<Card>
				<div className="blogHeader">
					<span className="blogCategory">Featured</span>
					<h1 className="postTitle">Beautiful is always beautiful</h1>
					<span className="postedBy">posted on july21 ,2016bysora blogging tips</span>
				</div>
				<div className="postImageContainer">
					<img src={postImage} alt="Post Image"/>
				</div>
			</Card>
		</div>
	);
};

export default BlogPost;
