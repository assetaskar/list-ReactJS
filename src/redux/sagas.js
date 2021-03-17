import { call, put, takeEvery } from "redux-saga/effects";
import { request, gql } from "graphql-request";
import { failedData, successData } from "./actions/data";

function fetchData(number) {
	const query = gql`
		query {
			user(id: ${number}) {
				name
				email
				phone
				company {
					name
				}
			}
		}
	`;

	return request("https://graphqlzero.almansi.me/api", query);
}

function* workerLoadData() {
	try {
		const data = yield call(fetchData, 5);
		yield put(successData(data.user));
	} catch (error) {
		yield put(failedData(error));
	}
}

export function* watchLoadData() {
	yield takeEvery("DATA_LOAD", workerLoadData);
}
