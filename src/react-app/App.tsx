import "./App.css";
import dnuLogo from "./assets/dnu-logo.svg";
import jmacHeadshot from "./assets/jmac-whiteboard-square.jpg";

type StudentDocumentType = "report" | "poster" | "slides";

type StudentDocuments = Partial<Record<StudentDocumentType, string>>;

type StudentEntry = {
	name: string;
	graduationYear: string;
	projectTitle: string;
	documents?: StudentDocuments;
};

type StudentTerm = {
	term: string;
	theme: string;
	students: StudentEntry[];
};

const facultyMembers = [
	{
		name: "John MacCormick",
		headshot: jmacHeadshot,
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
		headshot: null,
		description:
			"The lab needs more faculty members before we officially launch🙂",
	},
];

const studentTerms: StudentTerm[] = [
	{
		term: "Summer 2026",
		theme: "Generalization in micro-LLMs",
		students: [
			{
				name: "Aaron Shin",
				graduationYear: "'27",
				projectTitle: "Infinite-length generalization in micro-LLMs",
			},
			{
				name: "John Lee",
				graduationYear: "'27",
				projectTitle: "LLM generalization for fixed-length inputs",
			},
		],
	},
	{
		term: "Spring 2026",
		theme: "Liberating chain-of-thought reasoning in large language models",
		students: [
			{
				name: "Pranav Azad",
				graduationYear: "'27",
				projectTitle:
					"Evaluating Data Representation and Chain-of-Thought Reasoning for Arithmetic Tasks in Character-Level Language Models",
				documents: {
					report: "/student-reports/spring2026/azad.pdf",
				},
			},
			{
				name: "Youssif Goda",
				graduationYear: "'26",
				projectTitle:
					"Hardware Comparison on Tiny Shakespeare (Character-Level nanoGPT)",
				documents: {
					report: "/student-reports/spring2026/lee-sanchez-goda.pdf",
					poster: "/student-reports/spring2026/goda-lee-sanchez-poster.pdf",
				},
			},
			{
				name: "John Lee",
				graduationYear: "'27",
				projectTitle:
					"Hardware Comparison on Tiny Shakespeare (Character-Level nanoGPT)",
				documents: {
					report: "/student-reports/spring2026/lee-sanchez-goda.pdf",
					poster: "/student-reports/spring2026/goda-lee-sanchez-poster.pdf",
				},
			},
			{
				name: "Maximo Sanchez",
				graduationYear: "'26",
				projectTitle:
					"Hardware Comparison on Tiny Shakespeare (Character-Level nanoGPT)",
				documents: {
					report: "/student-reports/spring2026/lee-sanchez-goda.pdf",
					poster: "/student-reports/spring2026/goda-lee-sanchez-poster.pdf",
				},
			},
			{
				name: "Mubashshir Alam Ifrad",
				graduationYear: "'26",
				projectTitle: "Transformer Reasoning Research",
				documents: {
					report: "https://github.com/Ifrad/transformer-reasoning-research",
				},
			},
			{
				name: "Tayyaba Jadoon",
				graduationYear: "'26",
				projectTitle:
					"Reasoning Without Generalization: A Comparison of Direct, Chain-of-Thought, and Scratchpad Training Paradigms on Out-of-Distribution Arithmetic",
				documents: {
					report: "/student-reports/spring2026/tayyaba.pdf",
				},
			},
			{
				name: "Hemanth Surya Ganesh Kapa",
				graduationYear: "'27",
				projectTitle: "Latent Chain-of-Thought via Looped Transformers",
				documents: {
					report:
						"https://github.com/hemanthkapa/comp560-hkapa/blob/main/latent-cot-nanogpt/FINAL_REPORT.md",
				},
			},
			{
				name: "Aziz Muminov",
				graduationYear: "'26",
				projectTitle:
					"Cross-Step Activation Mixing Has a Depth-Dependent Design Tradeoff: Preliminary Results on Multi-Digit Addition",
				documents: {
					report: "/student-reports/spring2026/muminov.pdf",
				},
			},
			{
				name: "Phu Nguyen",
				graduationYear: "'27",
				projectTitle:
					"Teaching Arithmetic to a Small Language Model: A Chain-of-Thought Training Study with NanoGPT",
				documents: {
					report: "/student-reports/spring2026/phu-nguyen.pdf",
				},
			},
			{
				name: "Son Nguyen",
				graduationYear: "'27",
				projectTitle: "Transformer Algebra for Reverse-Then-Add Composition",
				documents: {
					report:
						"https://github.com/sonnguyen123526/comp560-sonnguyen/blob/main/transformer-algebra/Final_Report.MD",
				},
			},
			{
				name: "Radiath Kamal Patwary",
				graduationYear: "'26",
				projectTitle:
					"From Readings About LLM Reasoning and Some Research Experiments",
				documents: {
					report: "/student-reports/spring2026/patwary.pdf",
				},
			},
			{
				name: "Lam Pham",
				graduationYear: "'28",
				projectTitle:
					"Optimizing nanoGPT for Multi-Digit Addition through Hardware, Algorithm, and MLOps Restructuring",
				documents: {
					report: "/student-reports/spring2026/pham.pdf",
				},
			},
			{
				name: "Rohan Piya",
				graduationYear: "'28",
				projectTitle:
					"Can Chain-of-Thought Improve Algorithmic Reasoning in Small Language Models?",
				documents: {
					report: "/student-reports/spring2026/piya.pdf",
				},
			},
			{
				name: "Niloy Saha",
				graduationYear: "'27",
				projectTitle: "What Tiny GPTs Can Represent and What They Actually Learn",
				documents: {
					report: "/student-reports/spring2026/niloy.pdf",
				},
			},
			{
				name: "Aaron Shin",
				graduationYear: "'27",
				projectTitle:
					"Target Masking in a Tiny Transformer: Higher Ceiling, Not Faster Convergence",
				documents: {
					report:
						"https://github.com/aaronshin43/comp560-aaronshin43/blob/main/FINAL_REPORT.md",
				},
			},
		],
	},
];

const studentDocumentOrder: StudentDocumentType[] = ["report", "poster", "slides"];

function StudentDocuments({ documents }: { documents?: StudentDocuments }) {
	const availableDocuments = studentDocumentOrder
		.map((type) => ({ type, url: documents?.[type] }))
		.filter((document): document is { type: StudentDocumentType; url: string } =>
			Boolean(document.url),
		);

	if (availableDocuments.length === 0) {
		return null;
	}

	return (
		<>
			.{" "}
			{availableDocuments.map((document, index) => (
				<span key={document.type}>
					{index > 0 ? ", " : ""}
					<a href={document.url}>{document.type}</a>
				</span>
			))}
		</>
	);
}

function App() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";
	const isAboutPage = path === "/about";
	const isFacultyPage = path === "/faculty";
	const isStudentsPage = path === "/students";

	if (isAboutPage) {
		return (
			<>
				<h1>About the DNU Lab</h1>
				<section className="about-content" aria-label="About the DNU Lab">
					<p>
						<strong>
							The Deep Network Understanding Lab is a collection of
							 students, faculty, and research projects at Dickinson
							 College. Our goal is to enable independent student
							 research on large language models and deep neural
							 networks. Put simply, we want to understand deep neural
							 networks - a goal that we call <em>deep network
							 understanding</em>, or DNU.
						</strong>
					</p>
					<p>
						Our definition of deep network understanding is broad and
						 inclusive. It incorporates not only research on the
						 internals of LLMs and DNNs, but also applied research that
						 uses these tools. Applying a deep network helps us to
						 understand deep networks. That's part of our mission.
					</p>
					<p>
						Every semester, the DNU Lab offers at least one
						 independent research course, led by one or more
						 instructors. Students receive college credit by signing
						 up for either a half-credit or full-credit version of a
						 research course. Each research course has a theme, and
						 the instructors will offer a variety of potential
						 research projects based on the theme. But projects are
						 not limited to that theme - students can also propose any
						 other project related to deep network understanding.
					</p>
					<p>
						Typically, no prior experience of large language models or
						 neural networks is required. We provide onboarding
						 exercises for students to learn the knowledge needed for
						 research in these areas. There is so much to explore that
						 it is perfectly feasible for undergraduate students to do
						 DNU research within a single semester, even starting from
						 no prior knowledge. We provide an ecosystem in which
						 experienced students help less experienced students, in
						 addition to the usual advice and teaching from faculty
						 instructors. Our research courses typically do have
						 prerequisites for domain knowledge. For example, a
						 COMP560 may require COMP190; a DATA560 may require
						 DATA180.
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

	if (isStudentsPage) {
		return (
			<>
				<h1>DNU Lab students</h1>
				{/* <p className="students-intro">
					Student researchers are grouped by term in reverse chronological order.
				</p> */}
				<section className="term-stack" aria-label="Student research by term">
					{studentTerms.map((term) => (
						<article className="term-block" key={term.term}>
							<h2>{term.term}</h2>
							<p className="term-theme">Theme: {term.theme}</p>
							<ul className="student-list">
								{term.students.map((student) => (
									<li className="student-item" key={`${term.term}-${student.name}-${student.projectTitle}`}>
										<p className="student-name">
											{student.name} {student.graduationYear}
										</p>
										<p className="student-project">
											<em>Topic: </em>
											 {student.projectTitle}
											<StudentDocuments documents={student.documents} />
										</p>
									</li>
								))}
							</ul>
						</article>
					))}
				</section>
				<nav className="placeholder-links" aria-label="Students page navigation">
					<a href="/">Back to Home</a>
					<a href="/faculty">Faculty Page</a>
					<a href="/about">About</a>
				</nav>
			</>
		);
	}

	if (isFacultyPage) {
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
			</nav>
		</>
	);
}

export default App;
