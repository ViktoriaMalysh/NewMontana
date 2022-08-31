import {
	Button,
	Checkbox,
	Dropdown,
	Form,
	Grid,
	Icon,
	Rating,
	Segment,
	Select,
} from "semantic-ui-react";
import { category, durations, rating, sortOptions } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import PriceRange from "../../Common/Price Range/PriceRange";
import banner from "../../assets/banner.jpg";

import styles from "./TourPackage.module.scss";

const TourPackage = () => {
	return (
		<>
			<Breadcrumb title="Tour package" link="tour package" />

			<Grid className={styles.tourPackage}>
				<Grid.Row>
					<Grid.Column>
						<Segment raised className={styles.tourPackageSegmentLeft}>
							<h4>Search tours</h4>
							<Form>
								<Form.Field className={styles.tourPackageFormField}>
									<label>Destination</label>
									<input placeholder="New York, USA" />
								</Form.Field>
								<Form.Field className={styles.tourPackageFormField}>
									<label>Check In</label>
									<input placeholder="MM / DD / YY" type="date" />
								</Form.Field>
								<Form.Field className={styles.tourPackageFormField}>
									<label>Check Out</label>
									<input placeholder="MM / DD / YY" type="date" />
								</Form.Field>
								<Form.Field className={styles.tourPackageFormField}>
									<label>Travel Type</label>
									<Select
										label="Travel Type"
										// options={options}
										placeholder="Travel Type"
										className={styles.searchAreaSelect}
									/>
								</Form.Field>
								<Form.Field className={styles.tourPackageFormField}>
									<Button className={styles.tourPackageButton}>
										<Icon name="" />
										Find now
									</Button>
								</Form.Field>
							</Form>
						</Segment>

						<Grid raised className={styles.tourPackageSegmentRight}>
							<Grid.Row>
								<Grid.Column
									width={12}
									// style={{ background: "red" }}
								>
									<h5>Showing 1-10 of 50 Results</h5>
								</Grid.Column>
								<Grid.Column
									floated="right"
									width={4}
									// style={{ background: "green" }}
								>
									{/* <Select */}
									<Dropdown
										className={styles.tourPackageSelect}
										options={sortOptions}
										defaultValue={sortOptions[0].value}
										fluid
										selection
										scrolling
									/>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Segment raised className={styles.tourPackageSegmentLeft}>
							<h4>Category</h4>
							{category.map((item) => (
								<Checkbox
									label={item.name}
									className={styles.tourPackageCheckbox}
									type="checkbox"
								/>
							))}
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Segment raised className={styles.tourPackageSegmentLeft}>
							<h4>Price Range</h4>
							<PriceRange min={1} max={500} />
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Segment raised className={styles.tourPackageSegmentLeft}>
							<h4>Durations</h4>
							{durations.map((item) => (
								<Checkbox
									label={item.name}
									className={styles.tourPackageCheckbox}
									type="checkbox"
								/>
							))}
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Segment raised className={styles.tourPackageSegmentLeft}>
							<h4>Rating</h4>
							{rating.map((item) => (
								<Checkbox
									label={
										<label>
											<Rating
												className={styles.tourPackageIcon}
												icon="star"
												maxRating={5}
												defaultRating={item.rate}
												disabled
											/>
										</label>
									}
									className={styles.tourPackageCheckbox}
									type="checkbox"
								/>
							))}
						</Segment>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<div className={styles.tourPackageSegmentLeftImage}>
							<img src={banner} />
							<div>
								<h2>
									Get <span>35% Off</span> On Norway Lake Tour
								</h2>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Footer />
		</>
	);
};

export default TourPackage;
