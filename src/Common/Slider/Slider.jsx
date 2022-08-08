import Carousel from "react-multi-carousel";
import { styles as stylesAnimation } from "../../Helpers/Animation/styles";
import { StyleRoot } from "radium";
import styles from "./Slider.module.scss";
import "react-multi-carousel/lib/styles.css";
import { images, responsive } from "../../Backend/Data";
import { Button } from "semantic-ui-react";

const Slider = () => {
	return (
		<Carousel
			responsive={responsive}
			infinite={true}
			draggable={true}
			autoPlay={true}
		>
			{images.map((item) => (
				<div
					className={styles.divCarouselItem}
					style={{ backgroundImage: `url(${item.src})` }}
				>
					<div className={styles.carouselBlock}>
						<h6>Explore Your Travel</h6>
						<h1>Travelling Around The World</h1>
						<p>
							There are many variations of passages available but the majority
							have suffered alteration in some form by injected humour or
							randomised words.
						</p>
						<Button className={styles.carouselBlockButtonLeft}>Contact us</Button>
						<Button className={styles.carouselBlockButtonRight}>About us</Button>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default Slider;
