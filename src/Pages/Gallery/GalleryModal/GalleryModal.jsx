import { useState } from "react";
import Lightbox from "react-image-lightbox";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import styles from "./GalleryModal.module.scss";
import Lightbox from "react-image-lightbox";

const images = [
	{
		title: "Kitten 1",
		caption: "Caption 1",
		url: "//placekitten.com/1500/500",
	},
	{
		title: "Kitten 2",
		caption: "Caption 2",
		url: "//placekitten.com/4000/3000",
	},
	{
		title: "Kitten 3",
		caption: "Caption 3",
		url: "//placekitten.com/800/1200",
	},
	{
		title: "Kitten 4",
		caption: "Caption 4",
		url: "//placekitten.com/1500/1500",
	},
];

const GalleryModal = ({ url }) => {
	// const [open, setOpen] = useState(false);
	const [imgIndex, setImgIndex] = useState(0);

	return (
		<Lightbox
			imageTitle={images[imgIndex].title}
			imageCaption={images[imgIndex].caption}
			mainSrc={images[imgIndex].url}
			nextSrc={images[(imgIndex + 1) % images.length].url}
			prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
			// onCloseRequest={() => setIsOpen(false)}
			onMovePrevRequest={() =>
				setImgIndex((imgIndex + images.length - 1) % images.length)
			}
			onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
		/>
		
		// <Modal
		// 	closeIcon
		// 	className={styles.galleryModal}
		// 	basic
		// 	centered
		// 	open={open}
		// 	onClose={() => setOpen(false)}
		// 	onOpen={() => setOpen(true)}
		// 	dimmer="blurring"
		// 	size="tiny"
		// 	trigger={
		// 		<Button className={styles.galleryModalButton}>
		// 			<Icon name="plus" size="small" className={styles.galleryModalIcon} />
		// 		</Button>
		// 	}
		// >
		// 	<Modal.Content className={styles.galleryModalContent}>
		// 		<Image src={url} />
		// 	</Modal.Content>
		// </Modal>
	);
};

export default GalleryModal;
