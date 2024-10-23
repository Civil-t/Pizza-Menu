import "./cardStyles.css";
import avatar from "./avatar.jpg";

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
  return (
    <div className="skill-list">
      <Skill name="CEH" color="red" />
      <Skill name="SFE" color="maroon" />
      <Skill name="Relentless" color="darkRed" />
      <Skill name="Redemption" color="darkOrange" />
    </div>
  );
}

function Skill(props) {
  return (
    <>
      <div className="skill" style={{ backgroundColor: props.color }}>
        {props.name}{" "}
      </div>
    </>
  );
}
