import { type StudentDocumentType, type StudentDocuments as StudentDocumentsMap } from "../types";

const studentDocumentOrder: StudentDocumentType[] = ["report", "poster", "slides"];

export function StudentDocuments({
	documents,
}: {
	documents?: StudentDocumentsMap;
}) {
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