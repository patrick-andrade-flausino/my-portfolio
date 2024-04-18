import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { SectionTitle } from "./components/sectionTitle/sectionTitle";

import "./styless/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header></Header>
      <Experience></Experience>
      <div className="infos">
        <SectionTitle text="Languages"></SectionTitle>
        <div className="languages-info">
          <span>🇺🇸 EN - Fluent</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"></SectionTitle>
        <div className="education-info">
          <span>🎓</span>
          <span>
            Computer Science Bachelors - Universidade Federal de Alfenas.
          </span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>CONTACT ME</button>
      </div>
    </main>
  );
}
