import { SectionTitle } from "../sectionTitle/sectionTitle";
import Image from "next/image";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience"></SectionTitle>
      <p>
        3 years working as a Software Developer, in companys such as
        Rendimento/Pay, BrasilCard and A2W.
      </p>
      <div className="experience-time">
        <div className="componenteImagem">
          <Image
            src="/react.svg"
            alt="Next.js Logo"
            width={36}
            height={34}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure-1">1 year</div>
          </div>
        </div>
        <div className="componenteImagem">
          <Image
            src="/js.svg"
            alt="Next.js Logo"
            width={36}
            height={34}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure-2">2 year</div>
          </div>
        </div>
        <div className="componenteImagem">
          <Image
            src="/ts.svg"
            alt="Next.js Logo"
            width={36}
            height={34}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure-2">2 year</div>
          </div>
        </div>
        <div className="componenteImagem">
          <Image
            src="/java.svg"
            alt="Next.js Logo"
            width={36}
            height={34}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure-3">3 year</div>
          </div>
        </div>
      </div>
    </div>
  );
}
