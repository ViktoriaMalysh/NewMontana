import React from "react";
import "./Calendar.scss";
import { Icon } from "semantic-ui-react";
import styles from "../Search Area/SearchArea.module.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

const CalendarContainer = ({
	onClickDay,
	calendarType,
	locale,
}) => {
	const formatShortWeekday = (locale, date) =>
		["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()];

	return (
		<div className={styles.searchAreaCalendar}>
			<Calendar
				formatShortWeekday={formatShortWeekday}
				next2Label={<Icon name="angle double right" />}
				prev2Label={<Icon name="angle double left" />}
				calendarType={calendarType}
				showNeighboringMonth={false}
				// locale="uk"
				onClickDay={onClickDay}
			/>
		 </div>
	);
};

export default CalendarContainer;
