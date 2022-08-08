import Carousel from "react-multi-carousel";
import { styles as stylesAnimation } from "../../Helpers/Animation/styles";
import { StyleRoot } from "radium";
import styles from "./Slider.module.scss";
import "react-multi-carousel/lib/styles.css";
import { images, responsive } from "../../Backend/Data";

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

						{/* <h1 className="h-slider-title" style={stylesAnimation.fadeInDown2s}>
							Montana Resort
						</h1>
						<p className="p-slider-title" style={stylesAnimation.fadeInDown3s}>
							Unlock to enjoy the view of Montana
						</p>{" "} */}
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default Slider;
