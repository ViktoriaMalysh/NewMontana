import { Icon, Image, Rating, Segment } from "semantic-ui-react";
import { responsiveTestimonials, testimonials } from "../../../Backend/Data";
import styles from "./Testimonials.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
	const CustomDot = ({ onMove, index, onClick, active }) => {
		return (
			<div className={styles.customDots}>
				<button
					className={active ? styles.customDotActive : styles.customDot}
					onClick={() => onClick()}
				></button>
			</div>
		);
	};

	return (
		<div className={styles.testimonialsDiv}>
			<span className={styles.testimonialsSpan}>Testimonials</span>
			<h2>what client say`s</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<Carousel
				className={styles.testimonialsCarousel}
				draggable
				autoPlay={true}
				infinite
				responsive={responsiveTestimonials}
				arrows={false}
				showDots
				customDot={<CustomDot />}
			>
				{testimonials.map((item) => (
					<Segment raised className={styles.testimonialsItem}>
						<Icon name="quote right" className={styles.testimonialsItemIcon} />
						<Rating
							disabled
							icon="star"
							defaultRating={item.rate}
							maxRating={5}
							className={styles.testimonialsItemRating}
						/>
						<span className={styles.testimonialsItemSpan}>{item.comment}</span>
						<div className={styles.testimonialsItemUser}>
							<Image src={item.avatar} />
							<div className={styles.testimonialsItemBlock}>
								<h4>{item.name}</h4>
								<span>{item.status}</span>
							</div>
						</div>
					</Segment>
				))}
			</Carousel>
		</div>
	);
};

export default Testimonials;
