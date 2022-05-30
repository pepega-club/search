/* @refresh reload */
import { render } from "solid-js/web";
import { hashIntegration, Router } from "solid-app-router";
import App from "./App";

import "ress/dist/ress.min.css";
import "./scss/index.scss";

render(() => <Router source={hashIntegration()}><App /></Router>, document.body);
