export function loadData() {
	return {
		type: "DATA_LOAD",
	};
}

export function successData(data) {
	return {
		type: "DATA_SUCCEEDED",
		payload: data,
	};
}
export function failedData(error) {
	return {
		type: "DATA_FAILED",
		payload: error,
	};
}
export function hideAlert() {
	return {
		type: "HIDE_ALERT",
	};
}
