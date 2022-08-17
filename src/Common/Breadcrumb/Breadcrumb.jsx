import styles from "./Breadcrumb.module.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ titleB, linkB, refB }) => {
  return (
    <div className={styles.breadcrumb}>
      <h2>{titleB}</h2>
      <div className={styles.breadcrumbDiv}>
        <Link to={"/"} className={styles.breadcrumbLink}>
          Home
        </Link>
        <Icon name="angle double right" className={styles.breadcrumbIcon} />
        <p>{linkB}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
