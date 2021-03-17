import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDelete } from "../../redux/actions/modal";
import { del } from "../../redux/actions/list";

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
}));

export default function DelModal() {
	const classes = useStyles();

	const isOpenDelete = useSelector(state => state.modal.isOpenDelete);
	const selectedList = useSelector(state => state.list.list.filter(item => item.isSelected));
	const dispatch = useDispatch();

	const closeHandler = () => {
		dispatch(closeDelete());
	};

	const clickOkHandler = () => {
		dispatch(del());
		dispatch(closeDelete());
	};

	const body =
		selectedList.length > 0 ? (
			<div className={classes.paper}>
				<p>Удалить?</p>
				{selectedList.map(item => (
					<p key={item.id}>{item.value}</p>
				))}
				<Button
					style={{ marginRight: 10 }}
					variant="contained"
					color="primary"
					onClick={clickOkHandler}
				>
					Да
				</Button>
				<Button variant="contained" color="secondary" onClick={closeHandler}>
					Нет
				</Button>
			</div>
		) : (
			<div className={classes.paper}>
				<p>Ничего не выделено!</p>
				<Button variant="contained" color="secondary" onClick={closeHandler}>
					Закрыть
				</Button>
			</div>
		);

	return (
		<Modal open={isOpenDelete} onClose={closeHandler}>
			{body}
		</Modal>
	);
}
