import { Segment, Form, Icon, Button, Dropdown } from "semantic-ui-react";
import styles from "./SearchArea.module.scss";
import { useState } from "react";
import CalendarContainer from "../Calendar/Calendar";
import "../Calendar/Calendar.scss";
import { accommodationTypes, calendarItems } from "../../Backend/Data";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
    // const store = useSelector((state) => state);
    const navigate = useNavigate();
    const destinations = useSelector((state) => state.api.destinations);
    const [search, setSearch] = useState({
        destination: "",
        destinationCode: "",
        accommodationType: "",
    });

    useEffect(() => {
        if (destinations.length) {
            setSearch({
                destination: destinations[0].value,
                destinationCode: destinations[0].key, 
                accommodationType: accommodationTypes[0].value,
            });
        }
    }, [destinations]);

    const [openCalendar, setOpenCalendar] = useState([
        {
            key: "check-in",
            open: false,
            date: dayjs(new Date()).format("YYYY-MM-DD"),
        },
        {
            key: "check-out",
            open: false,
            date: dayjs(new Date()).format("YYYY-MM-DD"),
        },
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
        setOpenCalendar(
            openCalendar.map((item) => {
                if (item.key === key) {
                    item.date = dayjs(date).format("YYYY-MM-DD");
                }
                return item;
            })
        );
    };

    const handleSearch = () => {
        const option = {
            destination: search.destination,
            destinationCode: search.destinationCode,
            checkIn: openCalendar[0].date,
            checkOut: openCalendar[1].date,
            type: [search.accommodationType],
        };

        navigate("/tour-package?" + new URLSearchParams(option).toString());
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
                            <Dropdown
                                selection
                                placeholder={
                                    destinations.length
                                        ? destinations[0].value
                                        : null
                                }
                                options={destinations}
                                defaultValue={search.destination}
                                value={search.destination}
                                onChange={(e, data) => {
                                    destinations.map((item) => {
                                        if (item.value === data.value) {
                                            setSearch({
                                                ...search,
                                                destination: data.value,
                                                destinationCode: item.key,
                                            });
                                        }
                                    });
                                }}
                                className={styles.searchAreaSelect}
                            />
                        </div>
                    </Form.Field>
                    {calendarItems.map((item, key) => (
                        <Form.Field key={key}>
                            <div>
                                <label>{item.label}</label>
                                {openCalendar.map(
                                    (block) =>
                                        block.key === item.key &&
                                        block.open &&
                                        (console.log(
                                            block.key === item.key && block.open
                                        ),
                                        (
                                            <CalendarContainer
                                                onClickDay={(value, event) => {
                                                    handleSetDate(
                                                        item.key,
                                                        value
                                                    );
                                                    handleClose(item.key);
                                                }}
                                                calendarType="US"
                                                setOpenCalendar={
                                                    setOpenCalendar
                                                }
                                                openCalendar={openCalendar}
                                                key={item.key}
                                                className={
                                                    styles.searchAreaCalendar
                                                }
                                                // locale="uk"
                                            />
                                        ))
                                )}

                                <div>
                                    <Icon
                                        name="map marker alternate"
                                        className={
                                            styles.searchAreaIconCalendar
                                        }
                                    />
                                    <input
                                        onClick={() => handleClose(item.key)}
                                        className={
                                            styles.searchAreaInputCalendar
                                        }
                                        placeholder={item.placeholder}
                                        value={openCalendar[key].date}
                                    />
                                </div>
                            </div>
                        </Form.Field>
                    ))}
                    <Form.Field>
                        <label>Travel Type</label>
                        <Icon name="globe" className={styles.searchAreaIcon} />

                        <Dropdown
                            selection
                            placeholder={accommodationTypes[0].value}
                            options={accommodationTypes}
                            defaultValue={search.accommodationType}
                            value={search.accommodationType}
                            onChange={(e, data) => {
                                setSearch({
                                    ...search,
                                    accommodationType: data.value,
                                });
                            }}
                            className={styles.searchAreaSelect}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Button
                            className={styles.searchAreaButton}
                            onClick={() => handleSearch()}
                        >
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
