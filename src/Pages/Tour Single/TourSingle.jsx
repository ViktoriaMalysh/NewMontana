import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import styles from "./TourSingle.module.scss";
import Banner from "../../Common/Banner/Banner";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Footer from "../../Common/Footer/Footer";
import GuestReviewsSingle from "../../Common/Tour Single Components/GuestReviewsSingle";
import HeaderSingle from "../../Common/Tour Single Components/Header";
import TableSingle from "../../Common/Tour Single Components/TableSingle";
import TextSingle from "../../Common/Tour Single Components/TextSingle";
import TourPlanSingle from "../../Common/Tour Single Components/TourPlanSingle";
import { getTour } from "../../redux/actions/actionApi";
import GallerySingle from "../../Common/Tour Single Components/GallerySingle";
import TourMapSingle from "../../Common/Tour Single Components/TourMapSingle";
import FormReviewSingle from "../../Common/Tour Single Components/FormReviewSingle";
import BookBlock from "../../Common/Tour Single Components/BookBlock";
import LoadingPage from "../Loading/Loading";
import _ from "lodash";

const TourSingle = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tour = useSelector((state) => state.api.tour);

  const rating = new URLSearchParams(window.location.search).get("rating");
  const price = Math.round(
    new URLSearchParams(window.location.search).get("price")
  );

  const [bookDetail, setBookDetail] = useState({
    firstName: localStorage.getItem("firstName")
      ? localStorage.getItem("firstName")
      : "",
    lastName: localStorage.getItem("lastName")
      ? localStorage.getItem("lastName")
      : "",
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
    phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : "",
    dateArrival: "",
    dateDeparture: "",
    additionalService: [],
    packagesCost: price,
  });

  const [selectedAdditionalService, setSelectedAdditionalService] = useState(
    {}
  );

  useEffect(() => {
    const options = {
      currency: localStorage.getItem("currency"),
      eapid: 1,
      locale: new URLSearchParams(window.location.search).get("locale"),
      siteId: 300000001,
      propertyId: params.id,
    };

    dispatch(getTour(options));
  }, []);

  const handleBook = () => {
    let additionalService = _.chain(selectedAdditionalService)
      .filter("checked")
      .mapValues("value")
      .values()
      .join(", ")
      .value();

    const option = {
      ...bookDetail,
      additionalService: additionalService,
      id: params.id,
    };

    navigate("/tour-booking?" + new URLSearchParams(option).toString());
  };

  const handleSetDetailsBook = (e) => {
    const { name, value } = e.target;
    setBookDetail({ ...bookDetail, [name]: value });
  };

  const myHandleChangeCheck = (data, type) => {
    const formattedType = _.snakeCase(type);
    setSelectedAdditionalService((prevSeletedType) => {
      return {
        ...prevSeletedType,
        [formattedType]: {
          ...prevSeletedType[formattedType],
          checked: data.checked,
          value: data.value.value,
        },
      };
    });
  };

  return (
    <>
      {tour.name ? (
        <>
          <Breadcrumb title={tour.name} link={tour.name ? tour.name : 5} />
          <Grid className={styles.tourSingle}>
            <Grid.Row>
              <Grid.Column width={11} style={{ width: "700px" }}>
                {tour.images.length && (
                  <Image
                    src={tour?.images[0].url}
                    className={styles.tourSingleAvatar}
                  />
                )}

                <HeaderSingle
                  tour={tour && tour}
                  rating={rating}
                  price={price}
                />

                <TextSingle />

                <TableSingle />

                <TourPlanSingle />

                <GallerySingle />

                <TourMapSingle image={tour?.imageMap} />

                <GuestReviewsSingle tour={tour && tour} />

                <FormReviewSingle />
              </Grid.Column>
              <Grid.Column width={5} floated="right">
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <BookBlock
                        bookDetail={bookDetail}
                        handleSetDetailsBook={handleSetDetailsBook}
                        handleBook={handleBook}
                        myHandleChangeCheck={myHandleChangeCheck}
                        selectedAdditionalService={selectedAdditionalService}
                        setSelectedAdditionalService={
                          setSelectedAdditionalService
                        }
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Banner />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer />
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default TourSingle;
