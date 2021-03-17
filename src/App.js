import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "./components/Row";
import { openAdd, openDelete } from "./redux/actions/modal";
import AddModal from "./components/modals/AddModal";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DelModal from "./components/modals/DelModal";

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
	const dispatch = useDispatch();

	const openAddModalHandler = () => {
		dispatch(openAdd());
	};

	const deleteHandler = () => {
		dispatch(openDelete());
	};

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
				<Button variant="outlined" disableFocusRipple>
					Тест GraphQL
				</Button>
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
