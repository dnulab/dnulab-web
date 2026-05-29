import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { FacultyPage } from "./pages/FacultyPage";
import { HomePage } from "./pages/HomePage";
import { StudentsPage } from "./pages/StudentsPage";

function App() {
	const path = window.location.pathname.replace(/\/+$/, "") || "/";

	switch (path) {
		case "/about":
			return <AboutPage />;
		case "/faculty":
			return <FacultyPage />;
		case "/students":
			return <StudentsPage />;
		default:
			return <HomePage />;
	}
}

export default App;
