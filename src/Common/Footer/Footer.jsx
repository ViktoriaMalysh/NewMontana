import { Grid, Icon } from "semantic-ui-react";
import styles from "./Footer.module.scss";
import logoWhite from "../../assets/logo_white.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Grid>
        <Grid.Row columns={4} className={styles.footerRow}>
          <Grid.Column className={styles.footerColumn}>
            <img alt="logo" src={logoWhite} />
            <p>
              There are many variations of the passages available the majority
              have suffered alteration in some form by injected humour.
            </p>
            <div className={styles.footerDivIcon}>
              <Icon name="facebook f" className={styles.footerIcon} />
              <Icon name="instagram" className={styles.footerIcon} />
              <Icon name="twitter" className={styles.footerIcon} />
              <Icon name="youtube" className={styles.footerIcon} />
            </div>
          </Grid.Column>
          <Grid.Column className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>FAQ's</li>
              <li>Terms Of Service</li>
              <li>Privacy policy</li>
              <li>Our Services</li>
            </ul>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Footer;
