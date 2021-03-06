import { useState } from "react";
import "./style.css";
import searchIcon from "../../assets/icons/search.png";
import { NavLink } from "react-router-dom";

// const searchIcon = require("../../assets/icons/search.png");
const Navbar = (props) => {
	require("../../assets/icons/search.png");
	const [search, setSearch] = useState(false);

	const submitSearch = (e) => {
		e.preventDefault();
		alert("Searched");
	};

	const openSearch = () => {
		setSearch(true);
	};

	const searchClass = search ? "searchInput active" : "searchInput";
	return (
		<div className="navbar">
			<ul className="navbarMenu">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about-us">About Us</NavLink>
				</li>
				<li>
					<NavLink to="/post">Posts</NavLink>
				</li>
				<li>
					<NavLink to="/contact-us">Contact Us</NavLink>
				</li>
			</ul>
			<div className="search">
				<form onSubmit={submitSearch}>
					<input
						type="text"
						className={searchClass}
						placeholder="Search"
					/>
					<img
						onClick={openSearch}
						className="searchIcon"
						src={searchIcon}
						alt="Search"
					/>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
