import { useEffect, useState } from "react";
import { Button, Grid, Icon, Message, Segment } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import BookingSummary from "../../Common/Tour Booking Components/BookingSummary";
import styles from "./BookingConfirm.module.scss";
import _ from "lodash";
import TableConfirm from "../../Common/BookingConfirmComponent/TableConfirm";

const BookingConfirm = () => {
    const [details, setDetails] = useState({
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

    const [totalCount, setTotalCount] = useState(
        Math.round(details.packagesCost)
    );

    const [subTotal, setSubTotal] = useState(totalCount);

    const [selectedAdditionalService, setSelectedAdditionalService] = useState(
        {}
    );

    const [discount, setDiscount] = useState(
        new URLSearchParams(window.location.search).get("discount")
    );

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

    const handleDownloadReceipt = () => {
        // Download Receipt
    };

    return (
        <>
            <Breadcrumb title="Booking Confirm" link="Confirm" />

            <Grid className={styles.tourPackage}>
                <Grid.Row>
                    <Message icon success className={styles.confirmMessage}>
                        <Icon name="check circle outline" />
                        <Message.Content
                            className={styles.confirmMessageContent}
                        >
                            <Message.Header
                                className={styles.confirmMessageHeader}
                            >
                                YOUR BOOKING CONFIRMED
                            </Message.Header>
                            Thank you for your booking! your payment has been
                            successful done and your booking is now confirmed
                        </Message.Content>
                    </Message>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Segment raised className={styles.tourConfirmSegment}>
                            <h4>Booking Details</h4>
                            <TableConfirm data={details} />

                            <h4>Payment</h4>
                            <div>
                                <p>You Payment With {"Master card"}</p>
                            </div>

                            <h4>Booking Details Link</h4>
                            <div>
                                <p>{"https://www.example.com/booking-234"}</p>
                            </div>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column width={5} style={{ textAlign: "center" }}>
                        <BookingSummary
                            details={details}
                            totalCount={totalCount}
                            setTotalCount={setTotalCount}
                            selectedAdditionalService={
                                selectedAdditionalService
                            }
                            discount={discount}
                            packagesCost={Math.round(details.packagesCost)}
                            subTotal={subTotal}
                            setSubTotal={setSubTotal}
                            confirm={true}
                        />
                        <Button
                            className={styles.tourConfirmDownloadReceipt}
                            onClick={handleDownloadReceipt}
                        >
                            Download receipt (pdf)
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer />
        </>
    );
};

export default BookingConfirm;
