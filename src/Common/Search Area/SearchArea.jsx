import { Segment, Form, Icon, Input, Select, Button } from "semantic-ui-react";
import styles from "./SearchArea.module.scss";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import "./Calendar.scss";

const SearchArea = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [openCalendar, setOpenCalendar] = useState([
		{ key: "check-in", open: false },
		{ key: "check-out", open: false },
	]);

	const handleClose = (key) => {
		setOpenCalendar(
			openCalendar.map((item) => {
				if (item.key === key) item.open = true;
				return item;
			})
		);
	};

	const formatShortWeekday = (locale, date) =>
		["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()];

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
					<Form.Field>
						<div>
							<label>Check In</label>
							{openCalendar && (
								<div className={styles.searchAreaCalendar}>
									<Calendar
										formatShortWeekday={formatShortWeekday}
										next2Label={<Icon name="angle double right" />}
										prev2Label={<Icon name="angle double left" />}
										calendarType="US"
										name="check-in"
										showNeighboringMonth={false}
										// locale="uk"
										onClickDay={(value, event) => {
											handleClose('check-in');
										}}
									/>
								</div>
							)}

							<input
								onClick={() => setOpenCalendar(true)}
								className={styles.searchAreaInputCalendar}
							/>
						</div>
					</Form.Field>
					<Form.Field>
						<div>
							<label>Check Out</label>
							{openCalendar && (
								<div className={styles.searchAreaCalendar}>
									<Calendar
										formatShortWeekday={formatShortWeekday}
										next2Label={<Icon name="angle double right" />}
										prev2Label={<Icon name="angle double left" />}
										calendarType="US"
										// name="check-out"
										showNeighboringMonth={false}
										// locale="uk"
										onClickDay={(value, event) => {
											handleClose(event.target.name);
										}}
									/>
								</div>
							)}

							<input
								onClick={() => setOpenCalendar(true)}
								className={styles.searchAreaInputCalendar}
							/>
						</div>
					</Form.Field>
					<Form.Field>
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
