const initialState = {
	list: [
		{
			id: 1,
			value: "Karaganda",
			isSelected: false,
		},
	],
	count: 2,
};

export default function listReducer(state = initialState, { type, payload }) {
	switch (type) {
		case "ADD":
			return {
				list: [
					...state.list,
					{
						id: state.count,
						value: payload,
						isSelected: false,
					},
				],
				count: state.count + 1,
			};

		case "DELETE":
			let newList = state.list.filter(item => item.isSelected !== true);

			return {
				list: newList,
				count: newList.length === 0 ? 1 : state.count,
			};

		case "CHECKED":
			return {
				...state,
				list: state.list.map(item =>
					item.id === payload
						? {
								...item,
								isSelected: !item.isSelected,
						  }
						: item
				),
			};

		default:
			return state;
	}
}
