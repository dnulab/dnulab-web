import jmacHeadshot from "../assets/jmac-whiteboard-square.jpg";
import xiaoluHeadshot from "../assets/wangx-square.jpg";
import erenHeadshot from "../assets/eren_dnu.jpg";
import { type FacultyMember } from "../types";

export const facultyMembers: FacultyMember[] = [
  {
    name: "John MacCormick",
    department: "Computer Science",
    headshot: jmacHeadshot,
    description: (
      <>
        John is the author of books such as <em>Thinking AI</em> and{" "}
        <em>9 Algorithms That Changed the Future</em>. He is passionate about
        undergraduate research, the public understanding of computer science,
        and the role of artificial intelligence in our society. He is the
        founder and director of the DNU Lab.
      </>
    ),
  },
  {
    name: "Eren Bilen",
    department: "Data Analytics",
    headshot: erenHeadshot,
    description:
      "Eren's research interests include reinforcement learning and its applications to games and puzzles. He is particularly interested in the different ways humans and AI discover solutions to unfamiliar problems. His projects include work on chess, the Rubik's Cube, and games involving probability and strategy.",
  },
  {
    name: "Lulu Wang",
    department: "Data Analytics",
    headshot: "https://www.dickinson.edu/images/faculty/large/wanglu.jpg",
    headshotPosition: "center 20%",
    description:
      "Lulu works in AI model interpretability, especially in finance. Her contributions lie at the intersection of finance, data science, and econometrics, including applications of graph neural networks to volatility prediction and recommender systems.",
  },
  {
    name: "Xiaolu Wang",
    department: "International Business and Management",
    headshot: xiaoluHeadshot,
    description: (
      <>
        Xiaolu's research projects center on incorporating LLMs into sentiment
        and emotion analysis and text mining of large scale online textual data.
      </>
    ),
  },
];
