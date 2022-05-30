export default function SearchBox() {
	return <>
		<div class="search search--show-suggestions">
			<form class="search__form">
				<div class="search__form__input" tabindex="-1">
					<input class="search__form__input__text" type="search" placeholder="Search query…" aria-label="Search query" name="q" />
					<button class="search__form__input__clear" type="reset" aria-label="Reset search query">
						<MdiClose />
					</button>
					<button class="search__form__input__submit" type="submit" aria-label="Submit search">
						<MdiSearch />
					</button>
				</div>
				<ul class="search__form__suggestions" aria-label="Search suggestions" tabindex="-1">
					<li><button type="button">pepega</button></li>
					<li><button type="button">pepegag emote</button></li>
					<li><button type="button">pepegapog emote</button></li>
					<li><button type="button">pepegaaim</button></li>
					<li><button type="button">pepega mod</button></li>
					<li><button type="button">pepega</button></li>
					<li><button type="button">pepegag emote</button></li>
					<li><button type="button">pepegapog emote</button></li>
					<li><button type="button">pepegaaim</button></li>
					<li><button type="button">pepega mod</button></li>
				</ul>
			</form>
		</div>
	</>;
}
