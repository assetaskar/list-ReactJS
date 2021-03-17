import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAdd } from "../../redux/actions/modal";
import { add } from "../../redux/actions/list";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	paper: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	textarea: {
		width: "100%",
		maxWidth: "100%",
		minHeight: 100,
		marginBottom: theme.spacing(2),
		fontFamily: "Roboto",
	},
}));

export default function AddModal() {
	const classes = useStyles();

	const isOpenAdd = useSelector(state => state.modal.isOpenAdd);
	const dispatch = useDispatch();

	const [text, setText] = React.useState("");

	const closeHandler = () => {
		dispatch(closeAdd());
		setText("");
	};

	const changeHandler = e => {
		setText(e.target.value);
	};

	const clickOkHandler = () => {
		if (text.trim() === "") {
			closeHandler();
		} else {
			dispatch(add(text.trim()));
			closeHandler();
		}
	};

	const body = (
		<div className={classes.paper}>
			<textarea className={classes.textarea} value={text} onChange={changeHandler} />
			<Button
				style={{ marginRight: 10 }}
				variant="contained"
				color="primary"
				onClick={clickOkHandler}
			>
				Ok
			</Button>
			<Button variant="contained" color="secondary" onClick={closeHandler}>
				Отмена
			</Button>
		</div>
	);

	return (
		<Modal open={isOpenAdd} onClose={closeHandler}>
			{body}
		</Modal>
	);
}
