import { Link } from "solid-app-router";
import { createSignal, For, onMount } from "solid-js";


export default function SearchBox(props) {
	let inputElement: HTMLInputElement;

	const [suggestions, setSuggestions] = createSignal(["pepega", "pepegag emote", "pepegapog emote", "pepegaaim", "pepega mod", "pepega", "pepegag emote", "pepegapogt emote", "pepegaaim", "pepega mod"]);

	if (props.autoFocus) {
		onMount(() => {
			inputElement.focus();
		});
	}

	return <>
		<div class="_search-box">
			<form class="form">
				<div class="input" tabindex="-1">
					<input class="text" ref={inputElement} type="search" placeholder="Search query…" aria-label="search query" name="q" />
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
