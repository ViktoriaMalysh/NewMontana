import React, { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./Pages/Login/Login";
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
						<Route path={route.path} key={index} />
					))}
				</Routes>
			</Layout>
		</>
	);
};

export default App;
