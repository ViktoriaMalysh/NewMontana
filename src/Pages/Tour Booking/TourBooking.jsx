import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Segment, Form } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TourBooking.module.scss";
import "../../Common/Calendar/Calendar.scss";
import dayjs from "dayjs";
import _ from "lodash";
import BookingSummary from "../../Common/Tour Booking Components/BookingSummary";
import YourDetails from "../../Common/Tour Booking Components/YourDetails";
import TourDetails from "../../Common/Tour Booking Components/TourDetails";

import PaymentInfo from "../../Common/Tour Booking Components/PaymentInfo";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const TourBooking = ({ data }) => {
    const [details, setDetails] = useState({
        id: new URLSearchParams(window.location.search).get("id"),
        firstName: new URLSearchParams(window.location.search).get("firstName"),
        lastName: new URLSearchParams(window.location.search).get("lastName"),
        email: new URLSearchParams(window.location.search).get("email"),
        phone: new URLSearchParams(window.location.search).get("phone"),
        address: "",
        dateArrival: new URLSearchParams(window.location.search).get(
            "dateArrival"
        ),
        dateDeparture: new URLSearchParams(window.location.search).get(
            "dateDeparture"
        ),
        packagesCost: new URLSearchParams(window.location.search).get(
            "packagesCost"
        ),
        additionalService: new URLSearchParams(window.location.search).get(
            "additionalService"
        ),
    });

    const [selectedAdditionalService, setSelectedAdditionalService] = useState(
        {}
    );

    const [totalCount, setTotalCount] = useState(
        Math.round(details.packagesCost)
    );

    const [subTotal, setSubTotal] = useState(totalCount);

    const [discount, setDiscount] = useState(0);

    const [openCalendar, setOpenCalendar] = useState([
        {
            key: "check-in",
            open: false,
            date: new URLSearchParams(window.location.search).get(
                "dateArrival"
            ),
        },
        {
            key: "check-out",
            open: false,
            date: new URLSearchParams(window.location.search).get(
                "dateDeparture"
            ),
        },
    ]);

    useEffect(() => {
        if (details.additionalService !== "") {
            let additionalService = _.split(details.additionalService, ", ");
            let test = {};

            additionalService.map((item) => {
                test = {
                    ...test,
                    [_.snakeCase(item)]: {
                        checked: true,
                        value: _.snakeCase(item),
                    },
                };
            });
            setSelectedAdditionalService(test);
        }
    }, []);

    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            // alert("Success!");
            setMessage({
                title: "YOUR BOOKING CONFIRMED",
                message:
                    "Thank you for your booking! your payment has been successful done and your booking is now confirmed.",
                //  A confirmation email has been sent to your email - info@example.com.
            });
        }

        if (query.get("canceled")) {
            // alert("canceled");
            setMessage({
                title: "",
                message: "",
            });
        }
    }, []);

    console.log("[selectedAdditionalService]", selectedAdditionalService);

    const myHandleChangeCheck = (data, type) => {
        const formattedType = _.snakeCase(type);
        setSelectedAdditionalService((prevSeletedType) => {
            return {
                ...prevSeletedType,
                [formattedType]: {
                    ...prevSeletedType[formattedType],
                    checked: data.checked,
                    value: data.value.value,
                },
            };
        });
    };

    console.log(window.location.origin);

    const handleClick = () => {
        axios
            .post(`${BACKEND_URL}reservation/create-checkout-session`, {
                id: details.id,
                successUrl:
                    window.location.origin +
                    "/booking-confirm" +
                    window.location.search +
                    `&discount=${discount}`,
                cancelUrl: window.location.href,
            })
            .then((res) => {
                window.location.href = res.data.url;
            });
    };

    const handleSetDetails = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

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

    return (
        <>
            <Breadcrumb title="Tour booking" link="tour booking" />

            <Grid className={styles.tourBooking}>
                <Grid.Row>
                    <Grid.Column>
                        <YourDetails
                            handleSetDetails={handleSetDetails}
                            details={details}
                        />

                        <BookingSummary
                            data={data}
                            details={details}
                            totalCount={totalCount}
                            setTotalCount={setTotalCount}
                            selectedAdditionalService={
                                selectedAdditionalService
                            }
                            discount={discount}
                            handleClick={handleClick}
                            packagesCost={Math.round(details.packagesCost)}
                            subTotal={subTotal}
                            setSubTotal={setSubTotal}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TourDetails
                            handleClose={handleClose}
                            handleSetDate={handleSetDate}
                            openCalendar={openCalendar}
                            myHandleChangeCheck={myHandleChangeCheck}
                            setOpenCalendar={setOpenCalendar}
                            selectedAdditionalService={
                                selectedAdditionalService
                            }
                            // detail={details}
                            discount={discount}
                            setDiscount={setDiscount}
                        />
                    </Grid.Column>
                </Grid.Row>
                {/* // <Grid.Row>
				// 	<Grid.Column>
				// 		<PaymentInfo />
				// 	</Grid.Column>
				// </Grid.Row> */}
            </Grid>

            <Footer />
        </>
    );
};

export default TourBooking;
