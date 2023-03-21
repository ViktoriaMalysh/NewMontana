import { useSelector } from "react-redux";
import { Button, Grid, Icon, Image, Rating } from "semantic-ui-react";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";
import dayjs from "dayjs";
import _ from "lodash";
import avatar from "../../assets/avatar2.jpg";
import defAvatar from "../../assets/def.png";
import { useState } from "react";

const GuestReviewsSingle = ({ tour }) => {
    const reviewsAll = useSelector((state) => state.api.tour?.reviews);
    const reviewsSlice = useSelector((state) =>
        _.slice(state.api.tour?.reviews, 0, 3)
    );
    const [reviews, setReviews] = useState(reviewsSlice);

    return (
        <>
            <h4 style={{ margin: "60px 0" }}>Reviews ({tour.totalCount})</h4>

            <Grid className={styles.tourSingleGrid}>
                {reviews &&
                    reviews.map((item, index) => (
                        <Grid.Row
                            columns={2}
                            className={styles.tourSingleGridRowReviews}
                            style={{ marginLeft: index % 2 !== 0 && "70px" }}
                        >
                            <Grid.Column width={3} floated="left">
                                <Image
                                    src={
                                        item.reviewer.name ? avatar : defAvatar
                                    }
                                />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <h5>
                                    {item.reviewer.name
                                        ? item.reviewer.name
                                        : "anonym"}
                                </h5>

                                <h5
                                    style={{
                                        color:
                                            item.badge === "Exceptional"
                                                ? "#155f06"
                                                : item.badge === "Very Good"
                                                ? "#26b40a"
                                                : item.badge === "Good"
                                                ? "#f3e302"
                                                : item.badge === "Fair"
                                                ? "#fca702"
                                                : "#990808",
                                    }}
                                >
                                    {item.badge}
                                </h5>
                                <span>{item.reviewDbDate} </span>
                                <p>{item.description}</p>
                                <Rating
                                    size="large"
                                    icon="star"
                                    defaultRating={item.rating / 2}
                                    maxRating={5}
                                    disabled
                                />
                            </Grid.Column>
                        </Grid.Row>
                    ))}

                {reviews.length > 3 ? (
                    <Button
                        className={styles.tourSingleButtonComment}
                        onClick={() => setReviews(reviewsSlice)}
                    >
                        <Icon name="sync" />
                        show less
                    </Button>
                ) : (
                    <Button
                        className={styles.tourSingleButtonComment}
                        onClick={() => setReviews(reviewsAll)}
                    >
                        <Icon name="sync" />
                        show more
                    </Button>
                )}
            </Grid>
        </>
    );
};

export default GuestReviewsSingle;
