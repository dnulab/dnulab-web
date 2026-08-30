import { type ReactNode } from "react";

export type StudentDocumentType = "report" | "poster" | "slides";

export type StudentDocuments = Partial<Record<StudentDocumentType, string>>;

export type StudentEntry = {
	name: string;
	graduationYear: string;
	projectTitle: string;
	advisors?: string[];
	documents?: StudentDocuments;
};

export type StudentTerm = {
	term: string;
	theme: string;
	advisors?: string[];
	students: StudentEntry[];
};

export type FacultyMember = {
	name: string;
	department: string;
	headshot: string | null;
	/** Optional CSS object-position for the headshot crop, e.g. "center 65%". */
	headshotPosition?: string;
	description: ReactNode;
};

export type EventEntry = {
	id: string;
	title: string;
	date: string;
	time?: string;
	location?: string;
	speaker?: string;
	description: string;
	category?: "Seminar" | "Workshop" | "Poster Session" | "Lab Meeting" | "Presentation" | "Other";
};