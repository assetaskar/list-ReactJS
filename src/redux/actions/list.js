export function add(value) {
	return {
		type: "ADD",
		payload: value,
	};
}

export function del() {
	return {
		type: "DELETE",
	};
}

export function checked(id) {
	return {
		type: "CHECKED",
		payload: id,
	};
}
