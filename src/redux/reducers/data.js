const initialState = {
	message: null,
	isLoading: false,
	type: null,
	showAlert: false,
};

export default function dataReducer(state = initialState, { type, payload }) {
	switch (type) {
		case "DATA_LOAD":
			return { ...state, isLoading: true };

		case "DATA_SUCCEEDED":
			return {
				...state,
				message: payload,
				isLoading: false,
				type: "success",
				showAlert: true,
			};

		case "DATA_FAILED":
			return {
				...state,
				message: payload.toString(),
				isLoading: false,
				type: "error",
				showAlert: true,
			};

		case "HIDE_ALERT":
			return { ...state, showAlert: false };

		default:
			return state;
	}
}
