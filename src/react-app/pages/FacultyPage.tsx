import { facultyMembers } from "../data/faculty";

export function FacultyPage() {
	return (
		<>
			<h1>DNU Lab faculty</h1>
			<section className="faculty-grid" aria-label="Faculty members">
				{facultyMembers.map((member) => (
					<article className="faculty-card" key={member.name}>
						<div className="headshot-slot">
							{member.headshot ? (
								<img
									className="headshot-image"
									src={member.headshot}
									alt={`Headshot of ${member.name}`}
								/>
							) : (
								<div className="headshot-placeholder" aria-hidden="true">
									Headshot
								</div>
							)}
						</div>
						<h2>{member.name}</h2>
						<p>{member.description}</p>
					</article>
				))}
			</section>
			<nav className="placeholder-links" aria-label="Faculty page navigation">
				<a href="/">Back to Home</a>
				<a href="/students">Student Page</a>
				<a href="/about">About</a>
			</nav>
		</>
	);
}