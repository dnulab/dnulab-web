import dnuLogo from "../assets/dnu-logo.svg";

export function HomePage() {
	return (
		<>
			<img className="hero-logo" src={dnuLogo} alt="DNU Lab logo" />
			<h1>The Deep Network Understanding Lab of Dickinson College</h1>
			<p>
				we foster independent undergraduate research on large language models
				 and deep neural networks
			</p>
			<nav className="placeholder-links" aria-label="Site navigation placeholders">
				<a href="/about">about</a>
				<a href="/faculty">faculty</a>
				<a href="/students">students</a>
				<a href="/events">events</a>
				<a href="/onboarding">onboarding</a>
			</nav>
		</>
	);
}