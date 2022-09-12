import { TOUR, TOURS } from "../types";

const initialState = {
	tours: [],
	tour: [],
};

export const reducerApi = (state = initialState, action) => {
	switch (action.type) {
		case TOURS:
			return { ...state, tours: action.payload };
		case TOUR:
			return { ...state, tour: action.payload };

		default:
			return state;
	}
};
