import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
import { routes } from "./Common/Routes";
import Layout from "./Common/Layout";
import "./App.css";

const App = () => {
	// if (!authStore.logined) {
	// 	return <Login />;
	// }
	return (
		<>
			<Layout>
				<Routes>
					{routes.map((route, index) => (
						<Route path={route.path} element={route.component} key={index} />
					))}
				</Routes>
			</Layout>
		</>
	);
};

export default App;
