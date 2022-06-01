import { Link, useNavigate } from "solid-app-router";
import { createSignal, For, onMount } from "solid-js";


export default function SearchBox(props) {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = createSignal("");
	const [suggestions, setSuggestions] = createSignal(["pepega", "pepegag emote", "pepegapog emote", "pepegaaim", "pepega mod", "pepega", "pepegag emote", "pepegapogt emote", "pepegaaim", "pepega mod"]);

	let inputElement: HTMLInputElement;

	if (props.autoFocus) {
		onMount(() => {
			inputElement.focus();
		});
	}

	const submit = (e) => {
		e.preventDefault();
		navigate("/search?q=" + encodeURIComponent(searchQuery()));
	};

	return <>
		<div class="_search-box">
			<form class="form" onSubmit={submit}>
				<div class="input" tabindex="-1">
					<input class="text" ref={inputElement} value={searchQuery()} onInput={e => setSearchQuery(e.currentTarget.value)} type="search" placeholder="Search query…" aria-label="search query" name="q" />
					<button class="clear" type="reset" aria-label="reset search query">
						<MdiClose />
					</button>
					<button class="submit" type="submit" aria-label="submit search">
						<MdiSearch />
					</button>
				</div>
				<ul class="suggestions" aria-label="search suggestions" tabindex="-1">
					<For each={suggestions()}>
						{(item) => <li><Link href="#">{item}</Link></li> }
					</For>
				</ul>
			</form>
		</div>
	</>;
}
