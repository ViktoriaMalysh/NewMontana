import axios from "axios";
import { API_URL, BACKEND_URL, X_RapidAPI_Key } from "../../config";
import { TOURS, TOUR, TOP_TOURS, DESTINATIONS, REVIEWS } from "../types";

export const getTours = (data) => {
    return async (dispatch) => {
        try {
            const result = await axios.post(`${BACKEND_URL}api/get-tours`, {
                data,
            });
            if (result.status === 200) {
                console.log(result.data.tours)
                dispatch({ type: TOURS, payload: result.data.tours });
            }
        } catch (err) {
            dispatch(alert(err));
        }
    };
};

export const getTopTours = () => {
    return async (dispatch) => {
        const options = {
            method: "POST",
            url: `${API_URL}list`,
            params: {
                destinationId: "1506246",
                pageNumber: "1",
                pageSize: "3",
                checkIn: "2022-09-20",
                checkOut: "2022-09-25",
                adults1: "1",
                sortOrder: "PRICE",
                locale: "en_US",
                currency: "USD",
            },
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": X_RapidAPI_Key,
                "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
            },
        };

        try {
            const result = await axios.post(
                `${BACKEND_URL}api/get-tours`,
                options
            );
            if (result.status === 200) {
                dispatch({ type: TOP_TOURS, payload: result.data.tours });
            }
        } catch (err) {
            console.log("Error", err);
            dispatch(alert("404 status (can not get top tours)"));
        }
    };
};

export const getTour = (options) => {
    return async (dispatch) => {
        // console.log("1", String(id));

        try {
            const result = await axios.post(`${BACKEND_URL}api/get-tour`, {
                data: options,
            });
            if (result.status === 200) {
                dispatch({ type: TOUR, payload: result.data.tourDetails });
            }
        } catch (err) {
            console.log("Error", err);
            dispatch(alert("404 status (can not get tour details)"));
        }
    };
};

export const getReviews = (id) => {
    return async (dispatch) => {
        const options = {
            method: "get",
            url: "https://hotels4.p.rapidapi.com/reviews/list",
            params: { id: id, page: "1", loc: "en_US" },
            headers: {
                "X-RapidAPI-Key": X_RapidAPI_Key,
                "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
            },
        };

        try {
            const result = await axios.post(
                `${BACKEND_URL}api/get-reviews`,
                options
            );
            if (result.status === 200) {
                dispatch({ type: REVIEWS, payload: result.data.reviews });
            }
        } catch (err) {
            console.log("Error", err);
            dispatch(alert("404 status (can not get reviews)"));
        }
    };
};
