const initialState = {
	list: [
		{
			id: 0,
			value: "Karaganda",
			isSelected: false,
		},
	],
	count: 0,
};

export default function listReducer(state = initialState, { type, payload }) {
	const list = [...state.list];

	switch (type) {
		case "ADD":
			let id = state.count + 1;

			list.push({ id, value: payload, isSelected: false });

			return { ...state, list, count: id };

		case "DELETE":
			let newList = list.filter(item => item.isSelected !== true);

			if (newList.length === 0) {
				return { ...state, list: newList, count: 0 };
			}

			return { ...state, list: newList };

		case "CHECKED":
			const index = list.findIndex(item => item.id === payload);

			if (~index) {
				list[index] = { ...list[index], isSelected: !list[index].isSelected };
				return { ...state, list };
			}

			return state;

		default:
			return state;
	}
}
