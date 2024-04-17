import { Header } from "./components/header/header";

import "./styless/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header></Header>
      <div className="experience">
        <h3>Experience</h3>
        <p>
          3 years working as a Software Developer, in companys such as Itaú,
          Stone and Aftersale.
        </p>
        <div className="experience-time"></div>

        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Fluent</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
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
      </div>
    </main>
  );
}
