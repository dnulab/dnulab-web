import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownPath = "/onboarding.md";

export function OnboardingPage() {
	const [content, setContent] = useState<string>("");
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		document.title = "Onboarding | DNU Lab";
	}, []);

	useEffect(() => {
		const controller = new AbortController();

		async function loadMarkdown() {
			try {
				const response = await fetch(markdownPath, { signal: controller.signal });

				if (!response.ok) {
					throw new Error(`Unable to load onboarding content (${response.status})`);
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
						: "Unable to load onboarding content.",
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
			<h1>Onboarding</h1>
			<section className="internal-content" aria-label="Onboarding exercises">
				{isLoading ? (
					<p>Loading onboarding content...</p>
				) : errorMessage ? (
					<p>{errorMessage}</p>
				) : (
					<article className="markdown-content">
						<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
					</article>
				)}
			</section>
			<nav className="placeholder-links" aria-label="Onboarding navigation">
				<a href="/">Back to Home</a>
			</nav>
		</>
	);
}
