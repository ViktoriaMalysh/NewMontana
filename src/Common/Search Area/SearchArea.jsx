import { Segment, Form, Icon } from "semantic-ui-react";
import styles from "./SearchArea.module.scss";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const SearchArea = () => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<Segment className={styles.searchAreaSegment}>
			<Form>
				<Form.Group widths="equal">
					<Form.Input
						className={styles.searchAreaInput}
						fluid
						label="Destination"
						icon="map marker alternate"
						iconPosition="left"
						placeholder="New York, USA"
					/>
					<DatePicker
						className={styles.datePicker}
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>

					<Form.Select
						fluid
						label="Travel Type"
						// icon="globe"
						// iconPosition="left"
						// options={options}
						placeholder="Travel Type"
					>
						<Icon name="globe" />
					</Form.Select>
				</Form.Group>
			</Form>
		</Segment>
	);
};

export default SearchArea;
