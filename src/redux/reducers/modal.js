const initialState = {
	isOpenAdd: false,
	isOpenDelete: false,
};

export default function modalReducer(state = initialState, { type, payload }) {
	switch (type) {
		case "OPEN_ADD":
			return { ...state, isOpenAdd: true };

		case "CLOSE_ADD":
			return { ...state, isOpenAdd: false };

		case "OPEN_DELETE":
			return { ...state, isOpenDelete: true };

		case "CLOSE_DELETE":
			return { ...state, isOpenDelete: false };

		default:
			return state;
	}
}
