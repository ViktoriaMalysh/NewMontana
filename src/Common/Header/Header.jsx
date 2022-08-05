import { Button, Menu } from "semantic-ui-react";
import { itemsHeader } from "../../Backend/Data";
import logo from "../../assets/logo-login.png";
import styles from "./Header.module.scss";

const Header = () => {
	// handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	return (
		<Menu pointing secondary className={styles.headerMenu}>
			<Menu.Item name="logout" className={styles.headerIcon}>
				<img alt="logo" src={logo} />
			</Menu.Item>
			{itemsHeader.map((item) => (
				<Menu.Item
					className={styles.headerItems}
					name={item.item}
					// active={activeItem === 'home'}
					// onClick={this.handleItemClick}
				/>
			))}

			<Button type="submit">Book now</Button>
		</Menu>
	);
};

export default Header;
