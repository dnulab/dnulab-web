import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { FacultyPage } from "./pages/FacultyPage";
import { HomePage } from "./pages/HomePage";
import { InternalPage } from "./pages/InternalPage";
import { InternalPosterGuidelinesPage } from "./pages/InternalPosterGuidelinesPage";
import { InternalReportGuidelinesPage } from "./pages/InternalReportGuidelinesPage";
import { StudentsPage } from "./pages/StudentsPage";

function App() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";

	switch (path) {
		case "/about":
			return <AboutPage />;
		case "/faculty":
			return <FacultyPage />;
		case "/internal":
			return <InternalPage />;
		case "/internal/poster-guidelines":
			return <InternalPosterGuidelinesPage />;
		case "/internal/report-guidelines":
			return <InternalReportGuidelinesPage />;
		case "/students":
			return <StudentsPage />;
		default:
			return <HomePage />;
	}
}

export default App;
