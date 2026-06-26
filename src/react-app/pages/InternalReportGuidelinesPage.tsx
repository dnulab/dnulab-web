import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownPath = "/internal/report-guidelines.md";

export function InternalReportGuidelinesPage() {
	const [content, setContent] = useState<string>("");
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		document.title = "Lab Report Guidelines | DNU Lab Internal";

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

	useEffect(() => {
		const controller = new AbortController();

		async function loadMarkdown() {
			try {
				const response = await fetch(markdownPath, { signal: controller.signal });

				if (!response.ok) {
					throw new Error(`Unable to load guidelines (${response.status})`);
				}

				const markdown = await response.text();
				setContent(markdown);
			} catch (error) {
				if (controller.signal.aborted) {
					return;
				}

				setErrorMessage(
					error instanceof Error
						? error.message
						: "Unable to load report guidelines.",
				);
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		loadMarkdown();

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<>
			<h1>Lab report guidelines</h1>
			<section className="internal-content" aria-label="Lab report guidelines">
				{isLoading ? (
					<p>Loading report guidelines...</p>
				) : errorMessage ? (
					<p>{errorMessage}</p>
				) : (
					<article className="markdown-content">
						<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
					</article>
				)}
			</section>
			<nav className="placeholder-links" aria-label="Internal page navigation">
				<a href="/internal">Internal home</a>
				<a href="/">Back to Home</a>
			</nav>
		</>
	);
}
