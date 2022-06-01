import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";

export default function HomePage() {
	return <>
		<div class="_home-page">
			<Logo big />
			<SearchBox autoFocus />
		</div>
	</>;
}
