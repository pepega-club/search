import { Routes, Route } from "solid-app-router";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

export default function App() {
	return <>
		<Routes>
			<Route path="/" element={HomePage} />
			<Route path="/search" element={SearchPage}/>
		</Routes>
	</>;
}
