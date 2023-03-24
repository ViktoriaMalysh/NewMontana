import { Divider, Icon, Rating } from "semantic-ui-react";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const HeaderSingle = ({ tour, price, rating }) => {
    return (
        <>
            <div className={styles.tourSingleDiv}>
                <div className={styles.tourSingleDiv1Left}>
                    <h3>{tour.name}</h3>
                    {tour.rating && (
                        <Rating
                            size="large"
                            icon="star"
                            maxRating={5}
                            defaultRating={rating}
                            disabled
                        />
                    )}{" "}
                    ({tour.totalCount} Reviews)
                </div>

                <div className={styles.tourSingleDiv1Right}>
                    <span className={styles.tourSingleSpanPrice}>
                        $ {price}
                    </span>
                    <p style={{ marginTop: "0px" }}>Per person</p>
                </div>
            </div>

            <Divider className={styles.tourSingleDivider} />

            <ul>
                <li>
                    <Icon
                        name="clock outline"
                        className={styles.tourSingleIcon}
                    />
                    1 Days/1 Nights{" "}
                </li>
                <li>
                    <Icon
                        name="user outline"
                        className={styles.tourSingleIcon}
                    />
                    5+ Persons
                </li>
                <li>
                    <Icon
                        name="bookmark outline"
                        className={styles.tourSingleIcon}
                    />
                    {/* {tour.type} */} Type*
                </li>
                <li>
                    <Icon
                        name="map marker alternate"
                        className={styles.tourSingleIcon}
                    />
                    {tour.city}
                </li>
            </ul>
        </>
    );
};

export default HeaderSingle;
