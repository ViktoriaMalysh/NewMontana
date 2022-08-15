import { Button, Icon, Image } from "semantic-ui-react";
import styles from "./HomeBlock2.module.scss";
import ctaImg from "../../assets/cta.jpg";

const HomeBlock2 = () => {
	return (
		<div className={styles.homeblock2}>
			<div className={styles.homeblock2DivImg}>
				<Image src={ctaImg} className={styles.homeblock2Img} />
			</div>
			<div className={styles.homeblock2Div}>
				<h2>
					Get discount <span>20-35%</span> off any tour package{" "}
				</h2>
				<p>when you purchase any package & get next tour</p>
				<Button>
					start your trip now <Icon name="arrow right" />
				</Button>
			</div>
		</div>
	);
};

export default HomeBlock2;
