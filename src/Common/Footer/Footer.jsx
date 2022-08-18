import { Grid, Icon, Input } from "semantic-ui-react";
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
					<Grid.Column className={styles.footerColumnContact}>
						<h4>Contact Us</h4>
						<ul>
							<li>
								<Icon
									name="map marker alternate"
									className={styles.footerIcon}
								/>{" "}
								15/B Road, New York, USA
							</li>
							<li>
								<Icon name="phone" className={styles.footerIcon} /> +2 123 4566
								789
							</li>
							<li>
								<Icon name="mail" className={styles.footerIcon} />
								info@example.com
							</li>
							<li>
								<Icon name="clock" className={styles.footerIcon} />
								Sun - Fri (10AM - 08PM)
							</li>
						</ul>
					</Grid.Column>
					<Grid.Column className={styles.footerColumnContact}>
						<h4>Newsletter</h4>
						<p>Subscribe our newsletter to get latest update and news</p>
            <Input className={styles.footerInput} placeholder="Your Email" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default Footer;
