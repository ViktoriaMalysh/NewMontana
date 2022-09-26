import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	Button,
	Checkbox,
	Divider,
	Form,
	Grid,
	Icon,
	Image,
	Rating,
	Segment,
	Table,
} from "semantic-ui-react";
import {
	additionalService,
	gallerySingleTour,
	tourPlans,
} from "../../Backend/Data";
import Banner from "../../Common/Banner/Banner";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import { getTour } from "../../redux/actions/actionApi";
import GalleryComponent from "../Gallery/Gallery Component/GalleryComponent";
import LoadingPage from "../Loading/Loading";
import styles from "./TourSingle.module.scss";

const TourSingle = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const tour = useSelector((state) => state.api.tour);

	useEffect(() => {
		// dispatch(getTour(params.id));
	}, []);

	// console.log("state", tour.photos[0]);

	return (
		<>
			{tour.nameHotel ? (
				<>
					<Breadcrumb
						title={tour.nameHotel}
						link={tour.nameHotel ? tour.nameHotel : 5}
					/>
					{/* // hotelId, photos, nameHotel, guestReviews: {(starRating, reviews)},
					price: {(currentPrice, oldPrice)}, // countryName, countryCode,
					cityName, fullAddress, currencyCode, roomTypes, postalCode, */}
					<Grid className={styles.tourSingle}>
						<Grid.Row>
							<Grid.Column width={11} style={{ width: "700px" }}>
								{tour.photos?.length && (
									<Image
										src={tour?.photos[0]}
										className={styles.tourSingleAvatar}
									/>
								)}
								<div className={styles.tourSingleDiv}>
									<div className={styles.tourSingleDiv1Left}>
										<h3>{tour.nameHotel}</h3>
										{tour.guestReviews?.starRating && (
											<Rating
												size="large"
												icon="star"
												maxRating={5}
												defaultRating={tour.guestReviews?.starRating}
												disabled
											/>
										)}{" "}
										({tour.guestReviews?.reviewsCount} Reviews)
									</div>

									<div className={styles.tourSingleDiv1Right}>
										<span className={styles.tourSingleSpanPrice}>
											{tour.price?.currentPrice}
										</span>
										<p style={{ marginTop: "0px" }}>Per person</p>
									</div>
								</div>
								<Divider className={styles.tourSingleDivider} />

								<ul>
									<li>
										<Icon
											name="clock outline"
											className={styles.tourSingleIcon}
										/>
										1 Days/1 Nights{" "}
									</li>
									<li>
										<Icon
											name="user outline"
											className={styles.tourSingleIcon}
										/>
										5+ Persons
									</li>
									<li>
										<Icon
											name="bookmark outline"
											className={styles.tourSingleIcon}
										/>
										{/* {tour.type} */} Type*
									</li>
									<li>
										<Icon
											name="map marker alternate"
											className={styles.tourSingleIcon}
										/>
										{tour.cityName}
									</li>
								</ul>

								<h3>Tour Overview</h3>

								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
									quia voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi
									nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
									dolor sit amet, consectetur, adipisci velit, sed quia non
									numquam eius modi tempora incidunt ut labore et dolore magnam
									aliquam quaerat voluptatem.
								</p>

								<h3>Included And Excluded</h3>
								<p>
									At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis praesentium voluptatum deleniti atque corrupti quos
									dolores et quas molestias excepturi sint occaecati cupiditate
									non provident, similique sunt in culpa qui officia deserunt
									mollitia animi, id est laborum et dolorum fuga.
								</p>

								<Table celled as="table">
									<Table.Body>
										{/* {tour.included.map((item) => (
										<Table.Row>
											<Table.Cell className={styles.tourSingleTableCellLeft}>
												<Icon
													name={item.type ? "check circle" : "times circle"}
													className={
														item.type
															? styles.tourSingleIconTrue
															: styles.tourSingleIconFalse
													}
												/>
												Unknown
											</Table.Cell>
											<Table.Cell className={styles.tourSingleTableCellRight}>
												{item.type ? "Yes" : "No"}
											</Table.Cell>
										</Table.Row>
									))} */}
									</Table.Body>
								</Table>

								<h3>Tour Plan</h3>
								<p>
									At vero eos et accusamus et iusto odio dignissimos ducimus qui
									blanditiis praesentium voluptatum deleniti atque corrupti quos
									dolores et quas molestias excepturi sint occaecati cupiditate
									non provident, similique sunt in culpa qui officia deserunt
									mollitia animi, id est laborum et dolorum fuga.
								</p>

								<div className={styles.tourSingleDiv2}>
									{tourPlans.map((item, index) => (
										<div
											className={
												!(index + 1 === tourPlans.length)
													? styles.tourSingleDiv2Block
													: styles.tourSingleDiv2BlockEnd
											}
										>
											<span className={styles.tourSingleSpanBlock}>
												0{index + 1}
											</span>
											<h4>{item.time}</h4>
											<h3>{item.title}</h3>
											<p>{item.text}</p>
											<ul>
												{item.ul.map((el) => (
													<li>
														<Icon
															name="check"
															className={styles.tourPlansIconBlock}
														/>
														{el}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>

								<h3>Tour Gallery</h3>
								<p>
									Accusamus et iusto odio dignissimos ducimus qui blanditiis
									praesentium voluptatum deleniti atque corrupti quos dolores et
									quas molestias excepturi sint occaecati cupiditate non
									provident, similique sunt in culpa qui officia deserunt
									mollitia animi, id est laborum et dolorum fuga.
								</p>

								<Grid>
									<Grid.Row columns={3}>
										<GalleryComponent data={gallerySingleTour} />
									</Grid.Row>
								</Grid>

								<h3>Tour Map</h3>
								<p>
									On the other hand, we denounce with righteous indignation and
									dislike men who are so beguiled and demoralized by the charms
									of pleasure of the moment, so blinded by desire, that they
									cannot foresee the pain and trouble that are bound to ensue;
									and equal blame belongs to those who fail in their duty
									through weakness of will, which is the same as saying through
									shrinking from toil and pain.
								</p>

								{/* there should be a map (iframe)  */}

								<h4 style={{ marginBottom: "60px" }}>
									Reviews ({tour.guestReviews?.reviewsCount})
								</h4>

								{/* <Grid className={styles.tourSingleGrid}>
								{tour.guestReviews.reviews.map((item, index) => (
									<Grid.Row
										columns={2}
										className={styles.tourSingleGridRowReviews}
										style={{ marginLeft: index % 2 !== 0 && "70px" }}
									>
										<Grid.Column width={3} floated="left">
											<Image src={item.avatar} />
										</Grid.Column>
										<Grid.Column width={13}>
											<h5>{item.user}</h5>
											<span>{item.date}</span>
											<p>{item.comment}</p>
											<Rating
												size="large"
												icon="star"
												defaultRating={item.rate}
												maxRating={5}
												disabled
											/>
											<Link to={"/"} className={styles.tourSingleButtonComment}>
												<Icon name="reply" />
												Reply
											</Link>
										</Grid.Column>
									</Grid.Row>
								))}
							</Grid> */}

								<h4 style={{ marginBottom: "60px" }}>Leave Your Review</h4>

								<Form className={styles.tourSingleForm}>
									<Form.Field>
										<span>Your Rate : </span>
										<Rating size="large" icon="star" maxRating={5} />
									</Form.Field>
									<Form.Group widths="equal">
										<Form.Field>
											<input placeholder="Your Name*" />
										</Form.Field>
										<Form.Field>
											<input placeholder="Your Email*" />
										</Form.Field>
									</Form.Group>
									<Form.TextArea placeholder="Your Review*" />

									<Button type="submit">
										<Icon name="paper plane outline" />
										Submit Review
									</Button>
								</Form>
							</Grid.Column>
							<Grid.Column width={5} floated="right">
								<Grid>
									<Grid.Row>
										<Grid.Column>
											<Segment raised className={styles.tourSingleSegment}>
												<h4 style={{ marginBottom: "10px" }}>Book This Tour</h4>
												<Form>
													<Form.Field className={styles.tourPackageFormField}>
														<label>First Name</label>
														<input placeholder="First Name" />
													</Form.Field>
													<Form.Field className={styles.tourPackageFormField}>
														<label>Last Name</label>
														<input placeholder="Last Name" />
													</Form.Field>
													<Form.Field className={styles.tourPackageFormField}>
														<label>Email</label>
														<input placeholder="Your Email" />
													</Form.Field>
													<Form.Field className={styles.tourPackageFormField}>
														<label>Phone</label>
														<input placeholder="Your Phone" />
													</Form.Field>
													<Form.Field className={styles.tourPackageFormField}>
														<label>Date</label>
														<input placeholder="MM / DD / YY" />
													</Form.Field>

													<h5>Additional Service</h5>
													{additionalService.map((item) => (
														<Checkbox
															label={item.value}
															className={styles.tourSingleCheckbox}
														/>
													))}

													<Form.Field className={styles.tourPackageFormField}>
														<Button className={styles.tourPackageButton}>
															<Icon name="check circle outline" />
															Book now
														</Button>
													</Form.Field>
												</Form>
											</Segment>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Banner />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Footer />
				</>
			) : (
				<LoadingPage />
			)}
		</>
	);
};

export default TourSingle;
