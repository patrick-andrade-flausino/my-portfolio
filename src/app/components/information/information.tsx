import { SectionTitle } from "../sectionTitle/sectionTitle";
import Image from "next/image";

import "./information.scss";

export function Information() {
  return (
    <div className="infos">
      <SectionTitle text="Languages"></SectionTitle>
      <div className="languages-info">
        <span className="bandeira">
          <Image
            src="/us.png"
            alt="bandeira USA"
            width={24}
            height={24}
            priority
          />
          EN
        </span>
        <span className="bandeira">
          <Image
            src="/br.png"
            alt="bandeira brasileira"
            width={24}
            height={24}
            priority
          />
          PT-BR - Native Speaker
        </span>
      </div>
      <SectionTitle text="Education"></SectionTitle>
      <div className="education-info">
        <span>🎓</span>
        <span>
          Computer Science Bachelors - Universidade Federal de Alfenas.
        </span>
      </div>
    </div>
  );
}
