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
import {
	category,
	durations,
	rating,
	sortOptions,
	topTours,
} from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import PriceRange from "../../Common/Price Range/PriceRange";

import styles from "./TourPackage.module.scss";
import TourCard from "../../Common/Tour Card/TourCard";
import CustomPagination from "../../Common/Pagination/Pagination";
import { useEffect, useState } from "react";
import Banner from "../../Common/Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../redux/actions/actionApi";

const TourPackage = () => {
	const [pageCount, setPageCount] = useState(0);
	const [currentItems, setCurrentItems] = useState(null);
	const [itemOffset, setItemOffset] = useState(0);

	const dispatch = useDispatch();
  const store = useSelector((state) => state);

	useEffect(()=>{
		dispatch(getTours());
	}, [])

	const itemsPerPage = 8;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(topTours.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(topTours.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % topTours.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<Breadcrumb title="Tour package" link="tour package" />

			<Grid className={styles.tourPackage}>
				<Grid.Row>
					<Grid.Column floated="left" width={4}>
						<Grid>
							<Grid.Row>
								<Grid.Column width={16}>
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
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column width={16}>
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
								<Grid.Column width={16}>
									<Segment raised className={styles.tourPackageSegmentLeft}>
										<h4>Price Range</h4>
										<PriceRange min={1} max={500} />
									</Segment>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row>
								<Grid.Column width={16}>
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
								<Grid.Column width={16}>
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
								<Grid.Column width={16}>
									<Banner />
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
					<Grid.Column
						floated="right"
						style={{
							width: "850px",
							paddingLeft: "90px",
							paddingRight: "auto",
						}}
					>
						<Grid className={styles.tourPackageSegmentRight}>
							<Grid.Row>
								<Grid.Column width={12}>
									<h5 className={styles.topToursH5}>
										Showing 1-10 of 50 Results
									</h5>
								</Grid.Column>
								<Grid.Column floated="right" width={4}>
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
							<Grid.Row columns={2}>
								{store.api.tours?.map((item) => (
									<Grid.Column style={{ marginRight: "0px" }}>
										<TourCard
											item={item}
											// onChange={handleChange}
											offer={false}
										/>
									</Grid.Column>
								))}
							</Grid.Row>
						</Grid>
						<div className={styles.topToursPagination}>
							<CustomPagination
								handlePageClick={handlePageClick}
								pageCount={pageCount}
							/>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Footer />
		</>
	);
};

export default TourPackage;
