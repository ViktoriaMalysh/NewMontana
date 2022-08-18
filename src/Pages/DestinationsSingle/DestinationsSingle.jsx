import { Image } from "semantic-ui-react";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./DestinationsSingle.module.scss";

const DestinationsSingle = () => {
  return (
    <div>
      <Breadcrumb title={"destinations single"} link={"destinations single"} />

      <div className={styles.destSingle}>
        <Image src="" className={styles.destSingleImage} />
      </div>

      <Footer />
    </div>
  );
};

export default DestinationsSingle;
