import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import TermsOfService from "../../Pages/Terms Of Service/TermsOfService";
import Destinations from "../../Pages/Destinations/Destinations";
import DestinationsPage from "../../Pages/Destinations/Destinations";
import DestinationsSingle from "../../Pages/DestinationsSingle/DestinationsSingle";
import AboutUsPage from "../../Pages/About Us/AboutUs";
import Team from "../../Pages/Team/Team";

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
	{
		path: "/terms-of-service",
		component: <TermsOfService />,
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
		path: "/destinations",
		component: <DestinationsPage />,
	},
	{
		path: "/destinations/1",
		component: <DestinationsSingle />,
	},
	{
		path: "/about-us",
		component: <AboutUsPage />,
	},
	{
		path: "/team",
		component: <Team />,
	},
	{
		path: "/",
		component: <Home />,
	},
];
