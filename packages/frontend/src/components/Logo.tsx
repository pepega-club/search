import { Link } from "solid-app-router";

export default function Logo(props) {
	return <>
		<Link classList={{_logo: true, big: props.big}} href="/">
			<h1>DankSearch</h1>
		</Link>
	</>;
}
