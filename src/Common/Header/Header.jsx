import { Button, Dropdown, Icon, Menu, Select } from "semantic-ui-react";
import { itemsHeader } from "../../Backend/Data";
import logo from "../../assets/logo-login.png";

import logoWhite from "../../assets/logo_white.png";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import TopHeader from "./TopHeader";


const Header = () => {
	// handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	const [headerShow, setHeaderShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [headerShow]);

	const handleScroll = () => {
		window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);
	};

	return (
		<div className={styles.headerDiv}>
			{!headerShow && <TopHeader />}
			<Menu
				secondary
				className={styles.headerMenu}
				style={{ background: headerShow ? "#fff" : "transparent" }}
			>
				<Menu.Item name="logout" className={styles.headerIcon}>
					<img alt="logo" src={headerShow ? logo : logoWhite} />
				</Menu.Item>

				<Menu.Menu position="right">
					{itemsHeader.map((item) => (
						<Menu.Item
							className={
								headerShow ? styles.headerItems : styles.headerItemsWhite
							}
							name={item.item}
							// active={activeItem === 'home'}
							// onClick={this.handleItemClick}
						/>
					))}
					<Button type="submit">
						Book now
						<Icon name="arrow right" className={styles.headerIcon} />
					</Button>
				</Menu.Menu>
			</Menu>
		</div>
	);
};

export default Header;
