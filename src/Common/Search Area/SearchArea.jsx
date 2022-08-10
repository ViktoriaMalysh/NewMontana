import { Segment, Form, Icon, Input, Select, Button } from "semantic-ui-react";
import styles from "./SearchArea.module.scss";
import { useState } from "react";
import CalendarContainer from "../Calendar/Calendar";
import "../Calendar/Calendar.scss";
import { calendarItems } from "../../Backend/Data";

const SearchArea = () => {
	const [openCalendar, setOpenCalendar] = useState([
		{ key: "check-in", open: false, date: new Date() },
		{ key: "check-out", open: false, date: new Date() },
	]);



	const handleClose = (key) => {
		setOpenCalendar(
			openCalendar.map((item) => {
				if (item.key === key) {
					item.open = !item.open;
				}
				return item;
			})
		);
	};

	const handleSetDate = (key, date) => {
		console.log(date);
		setOpenCalendar(
			openCalendar.map((item) => {
				if (item.key === key) {
					item.date = date;
				}
				return item;
			})
		);
	};

	return (
		<Segment className={styles.searchAreaSegment}>
			<Form>
				<Form.Group widths="equal" className={styles.searchAreaGroup}>
					<Form.Field>
						<label>Destination</label>
						<div>
							<Icon
								name="map marker alternate"
								className={styles.searchAreaIcon}
							/>
							<input
								placeholder="New York, USA"
								type="text"
								className={styles.searchAreaInput}
							/>
						</div>
					</Form.Field>
					{calendarItems.map((item) => (
						<Form.Field>
							<div>
								<label>{item.label}</label>
								{openCalendar.map(
									(block) =>
										block.key === item.key &&
										block.open &&
										(console.log(block.key === item.key && block.open),
										(
											<CalendarContainer
												onClickDay={(value, event) => {
													handleSetDate(item.key, value);
													handleClose(item.key);
												}}
												calendarType="US"
												// locale="uk"
											/>
										))
								)}

								<div>
									<Icon
										name="map marker alternate"
										className={styles.searchAreaIconCalendar}
									/>
									<input
										onClick={() => handleClose(item.key)}
										className={styles.searchAreaInputCalendar}
										placeholder={item.placeholder}
									/>
								</div>
							</div>
						</Form.Field>
					))}
					<Form.Field>
						<label>Travel Type</label>
						<Icon name="globe" className={styles.searchAreaIcon} />
						<Select
							label="Travel Type"
							// options={options}
							placeholder="Travel Type"
							className={styles.searchAreaSelect}
						/>
					</Form.Field>

					<Form.Field>
						<Button className={styles.searchAreaButton}>
							<Icon name="search" />
							Find now
						</Button>
					</Form.Field>
				</Form.Group>
			</Form>
		</Segment>
	);
};

export default SearchArea;
