import { events } from "../data/events";
import { type EventEntry } from "../types";

function EventCard({ event }: { event: EventEntry }) {
	return (
		<article className="event-card">
			<div className="event-header">
				<h3>{event.title}</h3>
				{event.category && <span className="event-category">{event.category}</span>}
			</div>
			<div className="event-meta">
				<span className="event-date">{event.date}</span>
				{event.time && <span className="event-time"> • {event.time}</span>}
				{event.location && <span className="event-location"> • {event.location}</span>}
			</div>
			{event.speaker && (
				<p className="event-speaker">
					<strong>Speaker/Host:</strong> {event.speaker}
				</p>
			)}
			<p className="event-description">{event.description}</p>
		</article>
	);
}

export function EventsPage() {
	return (
		<>
			<h1>DNU Lab Events</h1>
			<p className="events-intro">
				Welcome to the Events page of the Deep Network Understanding Lab. We hope you can come to our first event! See below...
			</p>

			<section className="events-section" aria-label="Lab events">
				{events.length > 0 ? (
					<div className="events-stack">
						{events.map((event) => (
							<EventCard key={event.id} event={event} />
						))}
					</div>
				) : (
					<p className="no-events">No events currently listed.</p>
				)}
			</section>

			<nav className="placeholder-links" aria-label="Events page navigation">
				<a href="/">Back to Home</a>
			</nav>
		</>
	);
}
