import { Grid, GridColumn } from "semantic-ui-react";
import { topTour } from "../../../Backend/Data";
import TourCard from "../../Tour Card/TourCard";
import styles from "./TopTour.module.scss";

const TopTour = () => {
	const handleChange = () =>{
		
	}

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
							<TourCard item={item} onChange={handleChange} />
						</GridColumn>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default TopTour;
