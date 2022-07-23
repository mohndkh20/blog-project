import Home from "./components/Home/home";
import Nav from "./components/NAVBAR/nav";
import Blog from "./components/BLOGS/blog1";
import PostDetails from "./components/POST/post";
import Footer from "./components/FOOT/footer";
import { Routes, Route } from "react-router-dom"
import "./App.css";

const App = () => {
	return (
		<div id="YOUTHINKLOGO3">
			<div id="YOUTHINKLOGO2">
				<Nav />
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/blog" exact element={<Blog />}></Route>
					<Route path="/blog/:slug" element={<PostDetails />}></Route>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;