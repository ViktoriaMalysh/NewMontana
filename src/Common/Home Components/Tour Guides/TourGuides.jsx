import { Grid, Icon, Image } from "semantic-ui-react";
import styles from "./TourGuides.module.scss";
import { Link } from "react-router-dom";
import { tourGuides } from "../../../Backend/Data";

const TourGuides = () => {
	return (
		<div className={styles.tourGuidesDiv}>
			<span className={styles.tourGuidesSpanTitle}>Tour guides</span>
			<h2>Meet our tour guides</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>

			<Grid className={styles.tourGuidesGrid}>
				<Grid.Row columns={4}>
					{tourGuides.map((guide) => (
						<Grid.Column className={styles.tourGuidesGridColumn}>
							<Image src={guide.avatar} />
							<div className={styles.tourGuidesBlock}>
								<div>
									<Icon name="facebook f" className={styles.tourGuidesIcon} />
									<Icon name="twitter" className={styles.tourGuidesIcon} />
									<Icon name="instagram" className={styles.tourGuidesIcon} />
									<Icon name="linkedin" className={styles.tourGuidesIcon} />
									<Icon name="youtube" className={styles.tourGuidesIcon} />
								</div>
								<Link to={"/"} className={styles.tourGuidesLink}>
									{guide.name}
								</Link>
								<span className={styles.tourGuidesSpan}>Tour Guide</span>
							</div>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default TourGuides;
