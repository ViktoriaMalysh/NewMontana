import { useEffect, useState } from "react";
import { Button, Divider, Icon, Segment } from "semantic-ui-react";
import { ADDITIONAL_SERVICE } from "../../Constants/magicNumbersValid";
import styles from "./BookingSummary.module.scss";

const BookingSummary = ({
    totalCount,
    subTotal,
    setSubTotal,
    setTotalCount,
    details,
    selectedAdditionalService,
    discount,
    handleClick,
    packagesCost,
    confirm,
}) => {
    const [vat, setVat] = useState(
        Math.round((totalCount / 100) * ADDITIONAL_SERVICE.vat)
    );

    useEffect(() => {
        let count = 0;

        setTotalCount(0);
        Object.keys(selectedAdditionalService).map((item) => {
            switch (item) {
                case "tour_guide":
                    if (selectedAdditionalService[item].checked)
                        count = count + ADDITIONAL_SERVICE.tourGuide;
                    break;

                case "insurance":
                    if (selectedAdditionalService[item].checked)
                        count = count + ADDITIONAL_SERVICE.insurance;
                    break;

                case "dinner":
                    if (selectedAdditionalService[item].checked)
                        count = count + ADDITIONAL_SERVICE.dinner;
                    break;

                case "car_rent":
                    if (selectedAdditionalService[item].checked)
                        count = count + ADDITIONAL_SERVICE.carRent;
                    break;

                default:
                    break;
            }
        });

        const temp = count + packagesCost;
        const tempVat = Math.round((temp / 100) * ADDITIONAL_SERVICE.vat);
        setVat(tempVat);
        const tempSubTotal = count + packagesCost + tempVat;
        setSubTotal(tempSubTotal);
        setTotalCount(tempSubTotal);
    }, [selectedAdditionalService]);

    useEffect(() => {
        if (discount > 0) {
            const sale = Math.round((subTotal / 100) * discount);
            setTotalCount(subTotal - sale);
        }
    }, [discount, subTotal]);

    return (
        <>
            <Segment raised className={styles.tourBookingSegmentRight}>
                <h4>Booking Summary</h4>
                <ul>
                    <br />

                    <li>
                        <strong className={styles.tourBookingRightStrong}>
                            Packages Cost
                        </strong>
                        <span className={styles.tourBookingRightSpan}>
                            $ {details.packagesCost}
                        </span>
                    </li>
                    <br />
                    {Object.keys(selectedAdditionalService).map((item) =>
                        item === "tour_guide" &&
                        selectedAdditionalService[item].checked ? (
                            <>
                                <li>
                                    <strong
                                        className={
                                            styles.tourBookingRightStrong
                                        }
                                    >
                                        Tour Guide
                                    </strong>
                                    <span
                                        className={styles.tourBookingRightSpan}
                                    >
                                        $ {ADDITIONAL_SERVICE.tourGuide}
                                    </span>
                                </li>
                                <br />
                            </>
                        ) : item === "insurance" &&
                          selectedAdditionalService[item].checked ? (
                            <>
                                <li>
                                    <strong
                                        className={
                                            styles.tourBookingRightStrong
                                        }
                                    >
                                        Insurance
                                    </strong>
                                    <span
                                        className={styles.tourBookingRightSpan}
                                    >
                                        $ {ADDITIONAL_SERVICE.insurance}
                                    </span>
                                </li>
                                <br />
                            </>
                        ) : item === "dinner" &&
                          selectedAdditionalService[item].checked ? (
                            <>
                                <li>
                                    <strong
                                        className={
                                            styles.tourBookingRightStrong
                                        }
                                    >
                                        Dinner
                                    </strong>
                                    <span
                                        className={styles.tourBookingRightSpan}
                                    >
                                        $ {ADDITIONAL_SERVICE.dinner}
                                    </span>
                                </li>
                                <br />{" "}
                            </>
                        ) : item === "car_rent" &&
                          selectedAdditionalService[item].checked ? (
                            <>
                                <li>
                                    <strong
                                        className={
                                            styles.tourBookingRightStrong
                                        }
                                    >
                                        Car Rent
                                    </strong>
                                    <span
                                        className={styles.tourBookingRightSpan}
                                    >
                                        $ {ADDITIONAL_SERVICE.carRent}
                                    </span>
                                </li>
                                <br />
                            </>
                        ) : null
                    )}

                    <li>
                        <strong className={styles.tourBookingRightStrong}>
                            Vat:
                        </strong>
                        <span className={styles.tourBookingRightSpan}>
                            ${vat}
                        </span>
                    </li>
                    <br />
                    <li>
                        <strong className={styles.tourBookingRightStrong}>
                            Sub Total:
                        </strong>
                        <span className={styles.tourBookingRightSpan}>
                            ${subTotal}
                        </span>
                    </li>

                    {discount > 0 && (
                        <>
                            <br />
                            <li>
                                <strong
                                    className={styles.tourBookingRightStrong}
                                >
                                    Discount
                                </strong>
                                <span className={styles.tourBookingRightSpan}>
                                    {discount} %
                                </span>
                            </li>
                        </>
                    )}
                </ul>

                <ul>
                    <li>
                        <Divider className={styles.tourBookingRightDivider} />
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong className={styles.tourBookingRightStrong}>
                            Total:
                        </strong>
                        <span className={styles.tourBookingRightSpan}>
                            ${totalCount ? totalCount : 0}
                        </span>
                    </li>
                </ul>
                <ul>
                    {!confirm && (
                        <li>
                            <Button
                                className={styles.tourBookingRightButton}
                                onClick={handleClick}
                            >
                                Checkout
                                <Icon name="arrow right" />
                            </Button>
                        </li>
                    )}
                </ul>
            </Segment>
        </>
    );
};

export default BookingSummary;
