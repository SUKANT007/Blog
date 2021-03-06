import Card from "../UI/Card";
import "./style.css";
const BlogPost = () => {
	return (
		<div className="blogPostContainer">
			<Card>
				<div className="blogHeader">
					<span className="blogCategory">Featured</span>
					<h1 className="postTitle">Beautiful is always beautiful</h1>
					<span>posted on july21 ,2016bysora blogging tips</span>
				</div>
			</Card>
		</div>
	);
};

export default BlogPost;
