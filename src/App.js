import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "./components/Row";
import { openAdd, openDelete } from "./redux/actions/modal";
import AddModal from "./components/modals/AddModal";
import { loadData, hideAlert } from "./redux/actions/data";
import DelModal from "./components/modals/DelModal";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
	buttons: {
		margin: theme.spacing(2),
		"& > button:not(:last-child)": {
			marginRight: theme.spacing(3),
		},
	},
	list: {
		"& > label:nth-child(odd)": {
			backgroundColor: "#ddd",
		},
		backgroundColor: "#eee",
	},
}));

function App() {
	const classes = useStyles();

	const list = useSelector(state => state.list.list);
	const { message, isLoading, type, showAlert } = useSelector(state => state.data);
	const dispatch = useDispatch();

	const openAddModalHandler = () => {
		dispatch(openAdd());
	};

	const deleteHandler = () => {
		dispatch(openDelete());
	};

	const dataHandler = () => {
		dispatch(loadData());
	};

	const closeHandler = () => {
		dispatch(hideAlert());
	};

	// for (const value in message) {
	// 	console.log(message[value]);
	// }

	return (
		<div>
			<div className={classes.buttons}>
				<Button
					onClick={openAddModalHandler}
					variant="contained"
					color="primary"
					disableFocusRipple
				>
					Добавить
				</Button>
				<Button
					variant="contained"
					color="secondary"
					disableFocusRipple
					onClick={deleteHandler}
				>
					Удалить
				</Button>
				<Button
					variant="outlined"
					disableFocusRipple
					onClick={dataHandler}
					disabled={isLoading}
				>
					Тест GraphQL
				</Button>

				<Snackbar open={showAlert} autoHideDuration={6000} onClose={closeHandler}>
					<Alert elevation={6} variant="filled" onClose={closeHandler} severity={type}>
						{type === "success"
							? `Name: ${message.name}, email: ${message.email}, phone: ${message.phone}
								, company: ${message.company.name}.`
							: message}
					</Alert>
				</Snackbar>
			</div>

			<div className={classes.list}>
				{list.map(item => (
					<Row key={item.id} {...item} />
				))}
			</div>

			<AddModal />

			<DelModal />
		</div>
	);
}

export default App;
