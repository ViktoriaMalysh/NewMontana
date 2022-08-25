import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import TermsOfService from "../../Pages/Terms Of Service/TermsOfServiceANDPrivacyPolicy";
import DestinationsPage from "../../Pages/Destinations/Destinations";
import DestinationsSingle from "../../Pages/DestinationsSingle/DestinationsSingle";
import AboutUsPage from "../../Pages/About Us/AboutUs";
import Team from "../../Pages/Team/Team";
import TestimonialsPage from "../../Pages/Testimonials Page/Testimonials";
import Gallery from "../../Pages/Gallery/Gallery";
import Faq from "../../Pages/Faq/Faq";
import ForgotPassword from "../../Pages/Forgot Password/ForgotPassword";
import ErrPage from "../../Pages/404/ErrPage";
import TermsOfServiceANDPrivacyPolicy from "../../Pages/Terms Of Service/TermsOfServiceANDPrivacyPolicy";
import { privacyPolicy, termsOfService, tourOffer } from "../../Backend/Data";
import TourOffer from "../../Pages/Tour Offer/TourOffer";

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
		path: "/err-404",
		component: <ErrPage />,
	},
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "/register",
		component: <Register />,
	},
	{
		path: "/forgot-password",
		component: <ForgotPassword />,
	},
	{
		path: "/terms-of-service",
		component: (
			<TermsOfServiceANDPrivacyPolicy
				data={termsOfService}
				title={"terms of service"}
				link={"terms of service"}
			/>
		),
	},
	{
		path: "/privacy-policy",
		component: (
			<TermsOfServiceANDPrivacyPolicy
				data={privacyPolicy}
				title={"privacy policy"}
				link={"privacy policy"}
			/>
		),
	},
	// {
	//   path: "/user/:id",
	//   component: <User />,
	// },
	{
		path: "/tours",
		// component: <Rooms />,
	},
	{
		path: "/tour-offer",
		component: <TourOffer data={tourOffer} />,
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
		path: "/testimonials",
		component: <TestimonialsPage />,
	},
	{
		path: "/gallery",
		component: <Gallery />,
	},
	{
		path: "/faq",
		component: <Faq />,
	},
	{
		path: "/",
		component: <Home />,
	},
];
