import SearchResult from "../components/SearchResult";
import SearchBox from "../components/SearchBox";
import Logo from "../components/Logo";

export default function SearchPage() {
	return <>
		<div class="_search-page">
			<Logo />
			<SearchBox />
			<hr class="border" />
			<div class="content">
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
				<SearchResult />
			</div>
		</div>
	</>;
}
