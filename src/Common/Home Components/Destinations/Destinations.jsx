import { Button, Grid, Icon, Image } from "semantic-ui-react";
import { destinations } from "../../../Backend/Data";
import styles from "./Destinations.module.scss";

const Destinations = () => {
	return (
		<div className={styles.destinationsDiv}>
			<span className={styles.destinationsSpan}>Destinations</span>
			<h2>Top destinations</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<Grid className={styles.destinationsGrid}>
				<Grid.Row columns={3}>
					{destinations.map((item) => (
						<Grid.Column
							width={item.width}
							className={styles.destinationsGridColumn}
						>
							<div className={styles.destinationsGridColumnDivImg1}>
								<div className={styles.destinationsGridColumnDivImg}>
									<Image src={item.imgUrl} />
									<Button className={styles.destinationsGridButton}>
										<Icon name="arrow right" />
									</Button>
								</div>
							</div>
							<div className={styles.destinationsGridColumnDiv}>
								<h3>{item.country}</h3>
								<span>Staging from{item.price}</span>
							</div>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Destinations;
