export function AboutPage() {
	return (
		<>
			<h1>About the DNU Lab</h1>
			<section className="about-content" aria-label="About the DNU Lab">
				<p>
					<strong>
						The Deep Network Understanding Lab is a collection of students,
						 faculty, and research projects at Dickinson College. Our goal is
						 to enable independent student research on large language models
						 and deep neural networks. Put simply, we want to understand deep
						 neural networks - a goal that we call <em>deep network
						 understanding</em>, or DNU.
					</strong>
				</p>
				<p>
					Our definition of deep network understanding is broad and
					 inclusive. It incorporates not only research on the internals of
					 LLMs and DNNs, but also applied research that uses these tools.
					 Applying a deep network helps us to understand deep networks.
					 That's part of our mission.
				</p>
				<p>
					Every semester, the DNU Lab offers at least one independent
					 research course, led by one or more instructors. Students receive
					 college credit by signing up for either a half-credit or
					 full-credit version of a research course. Each research course
					 has a theme, and the instructors will offer a variety of
					 potential research projects based on the theme. But projects are
					 not limited to that theme - students can also propose any other
					 project related to deep network understanding.
				</p>
				<p>
					Typically, no prior experience of large language models or neural
					 networks is required. We provide onboarding exercises for
					 students to learn the knowledge needed for research in these
					 areas. There is so much to explore that it is perfectly feasible
					 for undergraduate students to do DNU research within a single
					 semester, even starting from no prior knowledge. We provide an
					 ecosystem in which experienced students help less experienced
					 students, in addition to the usual advice and teaching from
					 faculty instructors. Our research courses typically do have
					 prerequisites for domain knowledge. For example, a COMP560 may
					 require COMP190; a DATA560 may require DATA180.
				</p>
			</section>
			<nav className="placeholder-links" aria-label="About page navigation">
				<a href="/">Back to Home</a>
				<a href="/faculty">Faculty Page</a>
				<a href="/students">Students Page</a>
			</nav>
		</>
	);
}