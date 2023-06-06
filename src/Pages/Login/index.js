import LoginContainer from "./LoginContainer";
import styles from "./Login.module.scss"

const Login = () => {
  console.log("Login Page");
  return (
    <div className={styles.login}>
      <LoginContainer />
    </div>
  );
};

export default Login;
