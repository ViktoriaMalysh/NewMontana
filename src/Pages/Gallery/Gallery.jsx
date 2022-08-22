import { Button, Grid, Icon, Image } from "semantic-ui-react";
import { gallery } from "../../Backend/Data";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import styles from "./Gallery.module.scss";
import "react-image-lightbox/style.css";
import GalleryModal from "./GalleryModal/GalleryModal";

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb title="Gallery" link="gallery" />

      <Grid className={styles.galleryGrid}>
        <Grid.Row columns={3}>
          {gallery.map((item) => (
            <Grid.Column
              width={item.width}
              className={styles.galleryGridColumn}
            >
              {item.map((arr) => (
                <div className={styles.galleryGridColumnDivImg1}>
                  <div className={styles.galleryGridColumnDivImg}>
                    <Image src={arr.url} />
                    <div className={styles.galleryGridButton}>
                      <GalleryModal id={arr.id} />
                    </div>
                  </div>
                </div>
              ))}
            </Grid.Column>
          ))}
        </Grid.Row>
        <Button className={styles.galleryButton}>
          Load more
          <Icon name="sync" className={styles.galleryIcon} />
        </Button>
      </Grid>
      <Footer />
    </>
  );
};

export default GalleryPage;
