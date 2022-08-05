import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";

export const links = [
	{
		title: "header-home",
		link: "/",
	},
	{
		title: "header-rooms",
		link: "/rooms",
	},
	{
		title: "header-about",
		link: "/about",
	},
	{
		title: "header-blog",
		link: "/blog",
	},
	{
		title: "header-contact",
		link: "/contact",
	},
];

export const routes = [
	// {
	//   path: "/user/:userId",
	//   component: <User />,
	// },
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "/register",
		component: <Register />,
	},
	// {
	//   path: "/user/:id",
	//   component: <User />,
	// },
	{
		path: "/rooms",
		// component: <Rooms />,
	},
	{
		path: "/about",
		// component: <About />,
	},
	{
		path: "/blog",
		// component: <Blog />,
	},
	{
		path: "/contact",
		// component: <Contact />,
	},
	{
		path: "/",
		component: <Home />,
	},
];
