import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";

render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
