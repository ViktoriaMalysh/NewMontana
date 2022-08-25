import { Container, Header } from "semantic-ui-react";
import { termsOfService } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TermsOfService.module.scss";

const TermsOfService = () => {
	return (
		<>
			<Breadcrumb title="Terms Of Service" link="terms Of Service" />
			<div className={styles.termsBlock}>
				{termsOfService.map((item) => (
					<Container fluid className={styles.termsContainer}>
						<Header as="h3">{item.title}</Header>
						{item.text}
					</Container>
				))}
			</div>
			<Footer />
		</>
	);
};

export default TermsOfService;
