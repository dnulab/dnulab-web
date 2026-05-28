import "./App.css";
import dnuLogo from "./assets/dnu-logo.svg";

function App() {
	return (
		<>
			<img className="hero-logo" src={dnuLogo} alt="DNU Lab logo" />
			<h1>The Deep Network Understanding Lab of Dickinson College</h1>
			<p>
				we foster independent undergraduate research on large language models
				 and deep neural networks
			</p>
			<nav className="placeholder-links" aria-label="Site navigation placeholders">
				<a href="#" aria-disabled="true">
					Faculty Page (coming soon)
				</a>
				<a href="#" aria-disabled="true">
					Student Page (coming soon)
				</a>
			</nav>
		</>
	);
}

export default App;
