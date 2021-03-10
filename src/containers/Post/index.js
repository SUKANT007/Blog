import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import "./style.css";
const Post = (props) => {
	console.log(props);
	return (
		<section className="container">
			<BlogPost {...props} />
			<Sidebar  {...props} />
		</section>
	);
};

export default Post;

