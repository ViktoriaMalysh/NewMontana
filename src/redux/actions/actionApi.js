import axios from "axios";
import { API_URL, BACKEND_URL } from "../../config";
import { TOURS, TOUR } from "../types";

export const getTours = () => {
	return async (dispatch) => {
		const options = {
			method: "get",
			url: "https://hotels4.p.rapidapi.com/properties/list",
			params: {
				destinationId: "1506246",
				pageNumber: "1",
				pageSize: "25",
				checkIn: "2022-09-20",
				checkOut: "2022-09-25",
				adults1: "1",
				sortOrder: "PRICE",
				locale: "en_US",
				currency: "USD",
			},
			headers: {
				"X-RapidAPI-Key": "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
				"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
			},
		};

		try {
			const result = await axios.post(`${BACKEND_URL}api/get-tours`, options);
			if (result.status === 200) {
				dispatch({ type: TOURS, payload: result.data.tours });
			}
		} catch (err) {
			console.log("Error", err);
			dispatch(alert("Hotel room not booked"));
		}
	};
};

export const getTour = (id ) => {
	return async (dispatch) => {

		console.log(id)
		const options = {
			method: "get",
			url: "https://hotels4.p.rapidapi.com/properties/get-details",
			params: {
				id: id,
				checkIn: "2020-01-08",
				checkOut: "2020-01-15",
				adults1: "1",
				currency: "USD",
				locale: "en_US",
			},
			headers: {
				"X-RapidAPI-Key": "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
				"X-RapidAPI-Host": "hotels4.p.rapidapi.com",
			},
		};

		try {
			const result = await axios.post(`${BACKEND_URL}api/get-tour`, options);
			if (result.status === 200) {
				dispatch({ type: TOUR, payload: result.data.tourDetails });
			}
		} catch (err) {
			console.log("Error", err);
			dispatch(alert("Hotel room not booked"));
		}
	};
};
