import { Divider, Grid, Segment, Form, Button, Icon } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./TourBooking.module.scss";

const TourBooking = ({ data }) => {
  console.log(data);
  return (
    <>
      <Breadcrumb title="Tour booking" link="tour booking" />

      <Grid className={styles.tourBooking}>
        <Grid.Row>
          <Grid.Column>
            <Segment raised className={styles.tourBookingSegmentLeft}>
              <h4>Your Details</h4>

              <Form className={styles.tourBookingSegmentLeftForm}>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="First name"
                    placeholder="Your First Name"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Last name"
                    placeholder="Your Last Name"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="Email"
                    placeholder="Your Email"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Phone"
                    placeholder="Your Phone"
                  />
                </Form.Group>
                <Form.Input
                  className={styles.tourBookingSegmentLeftInput}
                  fluid
                  id="form-subcomponent-shorthand-input-last-name"
                  label="Address"
                  placeholder="Your Address"
                />
              </Form>
            </Segment>

            <Segment raised className={styles.tourBookingSegmentRight}>
              <h4>Booking Summary</h4>
              <ul>
                <br />

                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Packages Cost
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    ${data.packagesCost}
                  </span>
                </li>
                <br />
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Tour Guide
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    ${data.tourGuide}
                  </span>
                </li>
                <br />
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Discount
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    ${data.discount}
                  </span>
                </li>
                <br />
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Vat:
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    ${data.vat}
                  </span>
                </li>
                <br />
                <li>
                  <strong className={styles.tourBookingRightStrong}>
                    Sub Total:
                  </strong>
                  <span className={styles.tourBookingRightSpan}>
                    ${data.subTotal}
                  </span>
                </li>
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
                    ${data.total}
                  </span>
                  <Button className={styles.tourBookingRightButton}>
                    Book now
                    <Icon name="arrow right" />
                  </Button>
                </li>
              </ul>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment raised className={styles.tourBookingSegmentLeft}>
              <h4>Payment Info</h4>

              <Form className={styles.tourBookingSegmentLeftForm}>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="Card Holder Name"
                    placeholder="Name On Card"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Card Number"
                    placeholder="Your Card Number"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="Expire"
                    placeholder="Expire Date"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="CCV"
                    placeholder="CCV"
                  />
                </Form.Group>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment raised className={styles.tourBookingSegmentLeft}>
              <h4>Billing Address</h4>

              <Form className={styles.tourBookingSegmentLeftForm}>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="First Name"
                    placeholder="Your First Name"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Last Name"
                    placeholder="Your Last Name"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="Email"
                    placeholder="Your Email"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="phone"
                    placeholder="Your Phone"
                  />
                </Form.Group>

                <Form.Group widths="equal">
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="Address 1"
                    placeholder="Your Address 1"
                  />
                  <Form.Input
                    className={styles.tourBookingSegmentLeftInput}
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    label="Address 2"
                    placeholder="Your Address 2"
                  />
                </Form.Group>
                <Form.TextArea
                  className={styles.tourBookingSegmentLeftTextArea}
                  label="Additional Info"
                  placeholder="Additional Info"
                />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer />
    </>
  );
};

export default TourBooking;
