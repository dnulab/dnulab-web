import jmacHeadshot from "../assets/jmac-whiteboard-square.jpg";
import xiaoluHeadshot from "../assets/wangx-square.jpg";
import { type FacultyMember } from "../types";

export const facultyMembers: FacultyMember[] = [
	{
		name: "John MacCormick",
		department: "Computer Science",
		headshot: jmacHeadshot,
		description: (
			<>
				John is the author of books such as <em>Thinking AI</em> and <em>9
				 Algorithms That Changed the Future</em>. He is passionate about
				 undergraduate research, the public understanding of computer science,
				 and the role of artificial intelligence in our society. He is the
				 founder and director of the DNU Lab.
			</>
		),
	},
	{
		name: "Eren Bilen",
		department: "Data Analytics",
		headshot: "https://www.dickinson.edu/images/faculty/large/bilene.jpg",
		description:
			"Eren's bio here",
	},
	{
		name: "Lulu Wang",
		department: "Data Analytics",
		headshot: "https://www.dickinson.edu/images/faculty/large/wanglu.jpg",
		headshotPosition: "center 20%",
		description:
			"Lulu's bio here",
	},
	{
		name: "Xiaolu Wang",
		department: "International Business and Management",
		headshot: xiaoluHeadshot,
		description: (
		<>Xiaolu's research projects center on incorporating LLMs into sentiment and emotion analysis and text mining of large scale online textual data.</>
		),
		
	},
];