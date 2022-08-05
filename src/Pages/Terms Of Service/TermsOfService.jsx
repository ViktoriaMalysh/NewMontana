import { Container, Header } from "semantic-ui-react";
import { termsOfService } from "../../Backend/Data";
import styles from "./TermsOfService.module.scss";

const TermsOfService = () => {
	return (
		<div className={styles.termsBlock}>
			{termsOfService.map((item) => (
				<Container fluid className={styles.termsContainer}>
					<Header as="h3">{item.title}</Header>
					<p>{item.text}</p>
				</Container>
			))}
		</div>
	);
};

export default TermsOfService;
