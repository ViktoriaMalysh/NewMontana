import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, Grid, Icon, Image, Rating, Table } from "semantic-ui-react";
import { tourPlans } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TourSingle.module.scss";

const TourSingle = ({ data }) => {
	const [prodId, setProdId] = useState(0);
	const params = useParams();

	console.log(data);

	useEffect(() => {
		setProdId(params.id);
		console.log("prodId", params.id);

		const options = {
			method: "GET",
			url: "https://hotels4.p.rapidapi.com/properties/get-details",
			params: {
				id: params.id,
				checkIn: "2020-01-08",
				checkOut: "2020-01-15",
				adults1: "1",
				currency: "USD",
				locale: "en_US",
			},
			headers: {
				"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
				"X-RapidAPI-Key": "9dac91a6d8msha622f503c32b6abp134209jsnecbaf079fac6",
			},
		};
	}, []);

	return (
		<>
			<Breadcrumb title={data.name} link={data.name} />

			<Grid className={styles.tourSingle}>
				<Grid.Row>
					<Grid.Column width={11} style={{ width: "700px" }}>
						<Image src={data.imgUrl} className={styles.tourSingleAvatar} />

						<div className={styles.tourSingleDiv}>
							<div className={styles.tourSingleDiv1Left}>
								<h3>{data.name}</h3>
								<Rating
									size="large"
									icon="star"
									maxRating={5}
									defaultRating={data.rate}
									disabled
								/>{" "}
								({data.countReviews} Reviews)
							</div>

							<div className={styles.tourSingleDiv1Right}>
								<span className={styles.tourSingleSpanPrice}>
									${data.price}
								</span>
								<p>Per person</p>
							</div>
						</div>
						<Divider className={styles.tourSingleDivider} />

						<ul>
							<li>
								<Icon name="clock outline" className={styles.tourSingleIcon} />
								{data.days} Days/{data.nights} Nights{" "}
							</li>
							<li>
								<Icon name="user outline" className={styles.tourSingleIcon} />
								{data.persons}+ Persons
							</li>
							<li>
								<Icon
									name="bookmark outline"
									className={styles.tourSingleIcon}
								/>
								{data.type}
							</li>
							<li>
								<Icon
									name="map marker alternate"
									className={styles.tourSingleIcon}
								/>
								{data.city}
							</li>
						</ul>

						<h3>Tour Overview</h3>

						<p>{data.tourOverview}</p>

						<h3>Included And Excluded</h3>
						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia deserunt mollitia
							animi, id est laborum et dolorum fuga.
						</p>

						<Table celled as="table">
							<Table.Body>
								{data.included.map((item) => (
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
								))}
							</Table.Body>
						</Table>

						<h3>Tour Plan</h3>
						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores et quas molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia deserunt mollitia
							animi, id est laborum et dolorum fuga.
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
									{console.log(
										index === tourPlans.length,
										index + 1,
										tourPlans.length
									)}
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
							quas molestias excepturi sint occaecati cupiditate non provident,
							similique sunt in culpa qui officia deserunt mollitia animi, id
							est laborum et dolorum fuga.
						</p>

						<Grid>
							<Grid.Row>
								<Grid.Column></Grid.Column>
							</Grid.Row>
						</Grid>



					</Grid.Column>
					<Grid.Column
						width={5}
						floated="right"
						style={{ background: "green", width: "700px", height: "1000px" }}
					>
						<Grid>
							<Grid.Row>
								<Grid.Column
									style={{
										background: "blue",
										width: "600px",
										height: "400px",
									}}
								></Grid.Column>
							</Grid.Row>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			</Grid>

			<Footer />
		</>
	);
};

export default TourSingle;
