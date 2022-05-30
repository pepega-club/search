import { Routes, Route } from "solid-app-router";
import Home from "./pages/Home";

export default function App() {
	return <>
		<Routes>
			<Route path="/" element={Home} />
			<Route path="/dank" element={
				<h1>Zoinks!!! You just got danked!</h1>
			}/>
		</Routes>
	</>;
}
