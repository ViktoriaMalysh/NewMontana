import { Button, Checkbox, Form, Icon, Segment } from "semantic-ui-react";
import styles from "./Login.module.scss";
import logo from "../../assets/logo-login.png";
import { Link } from "react-router-dom";

const LoginContainer = ({}) => {
	return (
		<Segment className={styles.loginSegment} raised>
			<div className={styles.loginHeader}>
				<img src={logo} />
				<p>login with your travelox account</p>
			</div>
			<Form className={styles.loginForm} as="form">
				<Form.Field>
					<label>Email Address</label>
					<input placeholder="Your Email" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input placeholder="Your Password" />
				</Form.Field>
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button type="submit" as="button">
					<Icon className={styles.loginIcon} name="sign in alternate" /> Login
				</Button>
			</Form>

			<div className={styles.loginFooter}>Don't have an account? <Link to="/" className={styles.loginLink}>Register.</Link></div>
		</Segment>
	);
};

export default LoginContainer;
