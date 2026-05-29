import { type ReactNode } from "react";

export type StudentDocumentType = "report" | "poster" | "slides";

export type StudentDocuments = Partial<Record<StudentDocumentType, string>>;

export type StudentEntry = {
	name: string;
	graduationYear: string;
	projectTitle: string;
	documents?: StudentDocuments;
};

export type StudentTerm = {
	term: string;
	theme: string;
	students: StudentEntry[];
};

export type FacultyMember = {
	name: string;
	headshot: string | null;
	description: ReactNode;
};