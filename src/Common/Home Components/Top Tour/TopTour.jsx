import { Link } from "react-router-dom";
import {
	Button,
	Divider,
	Grid,
	GridColumn,
	Icon,
	Image,
	Rating,
	Segment,
} from "semantic-ui-react";
import { topTour } from "../../../Backend/Data";
import styles from "./TopTour.module.scss";

const TopTour = () => {
	return (
		<div className={styles.topTourDiv}>
			<span className={styles.topTourSpan}>Top Tour</span>
			<h2>Top tour package</h2>
			<p>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout.
			</p>
			<Grid>
				<Grid.Row columns={3} className={styles.topTourRow}>
					{topTour.map((item) => (
						<GridColumn>
							<Segment raised className={styles.topTourSegment}>
								<img src={item.imgUrl} className={styles.topTourSegmentImg} />
								<Grid className={styles.topTourSegmentBlock} divided>
									<Grid.Row columns={3}>
										<Grid.Column width={5}>
											<Icon name="clock outline" /> {item.countOfDays}D/
											{item.countOfDays - 1}N
										</Grid.Column>

										<Grid.Column width={6}>
											<Icon name="users" /> {item.countOfPerson} Person
										</Grid.Column>

										<Grid.Column width={5}>
											<Icon name="map marker alternate" /> {item.country}
										</Grid.Column>
									</Grid.Row>
								</Grid>

								<Link to={"/"}>
									<h5>{item.name}</h5>
								</Link>
								<div className={styles.topTourSegmentDiv}>
									<Rating
										defaultRating={item.rate}
										maxRating={5}
										size="small"
										icon="star"
										disabled
										className={styles.topTourSegmentRating}
									/>
									<span>({item.reviews} Reviews)</span>
								</div>
								<Divider className={styles.topTourSegmentDevider} />
								<div>
									<div className={styles.topTourSegmentDiv}>
										${item.price}
										<span>/per person</span>
									</div>
									<Button>
										Book now <Icon name="arrow right" />
									</Button>
								</div>
							</Segment>
						</GridColumn>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default TopTour;
