import "./cardStyles.css";
import avatar from "./avatar.jpg";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src={avatar} className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h3>Revenge Of The Dreamer</h3>
      <p>
        mysterious and highly skilled programmer with a calm yet intense
        demeanor. Always dressed in a dark hoodie and glasses reflecting endless
        lines of code, they are known for their unmatched ability to manipulate
        systems and break through seemingly impenetrable firewalls.Rogue hacker,
        seeking revenge and redemption, using their genius-level intellect to
        dismantle the corrupt systems that shattered their dreams
      </p>
    </div>
  );
}

function SkillList() {
  const skillsObj = skills;

  return (
    <>
      <ul className="skill-list">
        {skillsObj.map((skill) => (
          <Skill
            name={skill.skill}
            color={skill.color}
            level={skill.level}
            key={skill.name}
          />
        ))}
      </ul>
    </>
  );
}

function Skill({ color, name, level }) {
  //destructured props(color,name,level) from skill object
  return (
    <>
      <div className="skill" style={{ backgroundColor: color }}>
        {name}
        <span>
          {level === "advanced" && "💪"}
          {level === "intermediate" && "👍"}
          {level === "beginner" && "😒"}
        </span>{" "}
      </div>
    </>
  );
}
