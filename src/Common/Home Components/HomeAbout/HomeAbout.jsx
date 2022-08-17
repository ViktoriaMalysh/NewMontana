import { Button, Icon } from "semantic-ui-react";
import { homeAbout } from "../../../Backend/Data";
import styles from "./HomeAbout.module.scss";

const HomeAbout = () => {
	return (
		<div className={styles.homeAboutDiv}>
			{homeAbout.map((item) => (
				<>
					<div className={styles.homeAboutDivLeft}>
						<div className={styles.homeAboutDivImg}>
							<img src={item.imgUrl} />
						</div>
						<div className={styles.homeAboutDivBlock}>
							<h5>25+</h5>
							<span>Years Of Experience</span>
						</div>
					</div>
					<div className={styles.homeAboutDivRight}>
						<span className={styles.homeAboutSpan}>{item.label}</span>
						<h2>{item.title}</h2>
						<p>{item.text}</p>
						<ul>
							{item.items.map((i) => (
								<li>
									<Icon
										name="check circle outline"
										className={styles.homeAboutIcon}
									/>
									{i.text}
								</li>
							))}
						</ul>
						<Button>
							{item.buttonName}
							<Icon name="arrow right" />
						</Button>
					</div>
				</>
			))}
		</div>
	);
};

export default HomeAbout;
