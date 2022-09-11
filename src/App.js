import React from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
import { routes } from "./Common/Routes";
import Layout from "./Common/Layout";
import "./App.css";
import history from "./Common/history";

const App = () => {
	// if (!authStore.logined) {
	// 	return <Login />;
	// }
	return (
		<>
			<Layout>
				<Routes history={history}>
					{routes.map((route, index) => (
						<Route path={route.path} element={route.component} key={index} />
					))}
				</Routes>
			</Layout>
		</>
	);
};

export default App;
