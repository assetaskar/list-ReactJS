import React from "react";
import { useDispatch } from "react-redux";
import { checked } from "../redux/actions/list";

import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		width: "100%",
		margin: 0,
	},
}));

export default function Row({ id, value, isSelected }) {
	const classes = useStyles();

	const dispatch = useDispatch();

	return (
		<FormControlLabel
			className={classes.root}
			control={
				<Checkbox
					checked={isSelected}
					onChange={() => dispatch(checked(id))}
					name={id.toString()}
					color="secondary"
				/>
			}
			label={value}
		/>
	);
}
