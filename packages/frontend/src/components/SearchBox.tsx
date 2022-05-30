export default function SearchBox() {
	return <>
		<div class="search search--show-suggestions">
			<form class="search__form">
				<div class="search__form__input">
					<input class="search__form__input__text" type="search" aria-label="Search query" name="q" />
					<button class="search__form__input__reset" type="button" aria-label="Reset search query">
						<MdiClose />
					</button>
					<button class="search__form__input__submit" type="submit" aria-label="Submit search">
						<MdiSearch />
					</button>
				</div>
				<ul class="search__form__suggestions" aria-label="Search suggestions">
					<li>pepega</li>
					<li>pepegag emote</li>
					<li>pepegapog emote</li>
					<li>pepegaaim</li>
					<li>pepega mod</li>
					<li>pepega</li>
					<li>pepegag emote</li>
					<li>pepegapog emote</li>
					<li>pepegaaim</li>
					<li>pepega mod</li>
					<li>pepega</li>
					<li>pepegag emote</li>
					<li>pepegapog emote</li>
					<li>pepegaaim</li>
					<li>pepega mod</li>
					<li>pepega</li>
					<li>pepegag emote</li>
					<li>pepegapog emote</li>
					<li>pepegaaim</li>
					<li>pepega mod</li>
					<li>pepega</li>
					<li>pepegag emote</li>
					<li>pepegapog emote</li>
					<li>pepegaaim</li>
					<li>pepega mod</li>
				</ul>
			</form>
		</div>
	</>;
}
