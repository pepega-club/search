import { createSignal, For, onMount } from "solid-js";


export default function SearchBox() {
	let inputElement: HTMLInputElement;

	const [suggestions, setSuggestions] = createSignal(["pepega", "pepegag emote", "pepegapog emote", "pepegaaim", "pepega mod", "pepega", "pepegag emote", "pepegapogt emote", "pepegaaim", "pepega mod"]);

	onMount(() => {
		inputElement.focus();
	});

	return <>
		<div class="_search-box">
			<form class="form">
				<div class="input" tabindex="-1">
					<input class="text" type="search" placeholder="Search query…" aria-label="search query" name="q" />
					<button class="clear" type="reset" aria-label="reset search query">
						<MdiClose />
					</button>
					<button class="submit" type="submit" aria-label="submit search">
						<MdiSearch />
					</button>
				</div>
				<ul class="suggestions" aria-label="search suggestions" tabindex="-1">
					<For each={suggestions()}>
						{(item) => <li><a href="#">{item}</a></li> }
					</For>
				</ul>
			</form>
		</div>
	</>;
}
