import { SectionTitle } from "../sectionTitle/sectionTitle";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience"></SectionTitle>
      <p>
        3 years working as a Software Developer, in companys such as
        Rendimento/Pay, BrasilCard and A2W.
      </p>
      <div className="experience-time"></div>
    </div>
  );
}
