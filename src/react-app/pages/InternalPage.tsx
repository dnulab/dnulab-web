import { useEffect } from "react";

export function InternalPage() {
	useEffect(() => {
		document.title = "Internal | DNU Lab";

		const existingMeta = document.querySelector('meta[name="robots"]');
		const meta = existingMeta ?? document.createElement("meta");
		const previousContent = existingMeta?.getAttribute("content") ?? null;

		meta.setAttribute("name", "robots");
		meta.setAttribute("content", "noindex, nofollow");

		if (!existingMeta) {
			document.head.appendChild(meta);
		}

		return () => {
			if (existingMeta) {
				if (previousContent === null) {
					existingMeta.removeAttribute("content");
				} else {
					existingMeta.setAttribute("content", previousContent);
				}
			} else {
				meta.remove();
			}
		};
	}, []);

	return (
		<>
			<h1>Internal resources</h1>
			<section className="internal-content" aria-label="Internal resources">
				<p>
					This section hosts internal content that is intentionally
					 not linked from the public home page.
				</p>
				<nav className="placeholder-links" aria-label="Internal resources navigation">
					<a href="/internal/poster-guidelines">Poster guidelines</a>
					<a href="/internal/report-guidelines">Lab report guidelines</a>
					<a href="/">Back to Home</a>
				</nav>
			</section>
		</>
	);
}
