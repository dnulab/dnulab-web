import "./App.css";
import dnuLogo from "./assets/dnu-logo.svg";

const facultyMembers = [
	{
		name: "John MacCormick",
		description: (
			<>
				John is the author of books such as <em>Thinking AI</em> and <em>9
				 Algorithms That Changed the Future</em>. He is passionate about
				 undergraduate research, the public understanding of computer science,
				 and the role of artificial intelligence in our society. He is
				 the founder and director of the DNU Lab.
			</>
		),
	},
	{
		name: "Your name here!",
		description:
			"The lab needs more faculty members before we officially launch!",
	},
];

function App() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";
	const isFacultyPage = path === "/faculty";

	if (isFacultyPage) {
		return (
			<>
				<h1>DNU Lab faculty</h1>
				<section className="faculty-grid" aria-label="Faculty members">
					{facultyMembers.map((member) => (
						<article className="faculty-card" key={member.name}>
							<div className="headshot-placeholder" aria-hidden="true">
								Headshot
							</div>
							<h2>{member.name}</h2>
							<p>{member.description}</p>
						</article>
					))}
				</section>
				<nav className="placeholder-links" aria-label="Faculty page navigation">
					<a href="/">Back to Home</a>
					<a href="#" aria-disabled="true">
						Student Page (coming soon)
					</a>
				</nav>
			</>
		);
	}

	return (
		<>
			<img className="hero-logo" src={dnuLogo} alt="DNU Lab logo" />
			<h1>The Deep Network Understanding Lab of Dickinson College</h1>
			<p>
				we foster independent undergraduate research on large language models
				 and deep neural networks
			</p>
			<nav className="placeholder-links" aria-label="Site navigation placeholders">
				<a href="/faculty">faculty</a>
				<a href="#" aria-disabled="true">
					Student Page (coming soon)
				</a>
			</nav>
		</>
	);
}

export default App;
