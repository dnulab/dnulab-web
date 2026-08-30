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
                  style={
                    member.headshotPosition
                      ? { objectPosition: member.headshotPosition }
                      : undefined
                  }
                />
              ) : (
                <div className="headshot-placeholder" aria-hidden="true">
                  Headshot
                </div>
              )}
            </div>
            <h2>{member.name}</h2>
            <p className="faculty-department">{member.department}</p>
            <p>{member.description}</p>
          </article>
        ))}
      </section>
      <p className="faculty-note">
        Note for Dickinson faculty: Interested in joining us? Please get in touch! We welcome all faculty working with students on research that involves LLMs. Email jmac@dickinson.edu.
      </p>
      <nav className="placeholder-links" aria-label="Faculty page navigation">
        <a href="/">Back to Home</a>
      </nav>
    </>
  );
}
