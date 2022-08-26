import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TourBooking.module.scss";

const TourBooking = ({ tourBooking }) => {
	return (
		<>
			<Breadcrumb title="Tour booking" link="tour booking" />

			<div className={styles.tourBooking}>
        
      </div>

			<Footer />
		</>
	);
};

export default TourBooking;
