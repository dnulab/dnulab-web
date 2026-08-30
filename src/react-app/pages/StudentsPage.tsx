import { Fragment } from "react";
import { StudentDocuments } from "../components/StudentDocuments";
import { studentTerms } from "../data/students";

const studentsInterludeText =
	"Note: Reports, posters, and slides linked below are provided as submitted by students and have not been validated by faculty. Reports can be cited as, for example, “Dickinson College DNU Lab independent research report, spring 2026”.";

const advisorLabel = (advisors: string[]) =>
	advisors.length === 1 ? "Advisor" : "Advisors";

export function StudentsPage() {
	return (
		<>
			<h1>DNU Lab students</h1>
			<section className="term-stack" aria-label="Student research by term">
				{studentTerms.map((term, index) => (
					<Fragment key={term.term}>
						<article className="term-block" key={term.term}>
							<h2>{term.term}</h2>
							<p className="term-theme">Theme: {term.theme}</p>
							{term.advisors?.length ? (
								<p className="term-advisors"><em>{advisorLabel(term.advisors)}:</em> {term.advisors.join(", ")}</p>
							) : null}
							<ul className="student-list">
								{term.students.map((student) => (
									<li
										className="student-item"
										key={`${term.term}-${student.name}-${student.projectTitle}`}
									>
										<p className="student-name">
											{student.name} {student.graduationYear}
										</p>
										{student.advisors?.length ? (
											<p className="student-advisors"><em>{advisorLabel(student.advisors)}:</em> {student.advisors.join(", ")}</p>
										) : null}
										<p className="student-project">
											<em>Topic: </em> {student.projectTitle}
											<StudentDocuments documents={student.documents} />
										</p>
									</li>
								))}
							</ul>
						</article>
						{index === 0 && studentTerms.length > 1 ? (
							<aside className="term-interlude" aria-label="Students page interlude">
								{studentsInterludeText}
							</aside>
						) : null}
					</Fragment>
				))}
			</section>
			<nav className="placeholder-links" aria-label="Students page navigation">
				<a href="/">Back to Home</a>
			</nav>
		</>
	);
}