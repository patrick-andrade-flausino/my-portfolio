import { SectionTitle } from "../sectionTitle/sectionTitle";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience"></SectionTitle>
      <p>
        3 years working as a Software Developer, in companys such as Itaú, Stone
        and Aftersale.
      </p>
      <div className="experience-time"></div>
    </div>
  );
}
