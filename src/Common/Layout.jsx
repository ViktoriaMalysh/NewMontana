import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "./Header";

const Layout = ({ children }) => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState(location.pathname);

	useEffect(() => {
		const { pathname } = location;
		setCurrentPath(pathname);
	}, [location]);

	const mainStyle = {
		background: "#e5e5e5",
	};

	const loginStyle = {
		background: "#fff",
	};

	return (
		<div>
			<div style={{ background: "#fff" }}>
				{currentPath !== "/login" && <Header />}
			</div>
			<div style={currentPath !== "/login" ? mainStyle : loginStyle}>
				{children}
			</div>
		</div>
	);
};

export default Layout;
