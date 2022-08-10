import { Button, Checkbox, Form, Icon, Segment } from "semantic-ui-react";
import styles from "./Login.module.scss";
import logo from "../../assets/logo-login.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validate } from "../../Helpers/validation";

const LoginContainer = ({}) => {
	const [candidateValid, setCandidateValid] = useState({
		email: true,
		password: true,
	});

	const [candidate, setCandidate] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCandidateValid({ ...candidateValid, [name]: validate(value, name) });
		setCandidate({ ...candidate, [name]: value });
	};

	return (
		<Segment className={styles.loginSegment} raised>
			<div className={styles.loginHeader}>
				<img src={logo} />
				<p>login with your travelox account</p>
			</div>
			<Form className={styles.loginForm} as="form">
				<Form.Field>
					<label>Email Address</label>
					<Form.Input
						placeholder="Your Email"
						type="email"
						name="email"
						error={
							!candidateValid.email && !candidate.email
								? {
										content: "Required field",
										pointing: "below",
								  }
								: !candidateValid.email && candidate.email
								? {
										content: "Invalid email",
										pointing: "below",
								  }
								: null
						}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<Form.Input
						placeholder="Your Password"
						type="password"
						name="password"
						error={
							!candidateValid.password && !candidate.password
								? {
										content: "Required field",
										pointing: "below",
								  }
								: !candidateValid.password && candidate.password
								? {
										content: "Password must contain at least 8 characters",
										pointing: "below",
								  }
								: null
						}
						onChange={handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Checkbox label="I agree to the Terms and Conditions" />
				</Form.Field>
				<Button type="submit" as="button">
					<Icon className={styles.loginIcon} name="sign in alternate" /> Login
				</Button>
			</Form>

			<div className={styles.loginFooter}>
				Don't have an account?{" "}
				<Link to="/" className={styles.loginLink}>
					Register.
				</Link>
			</div>
		</Segment>
	);
};

export default LoginContainer;
