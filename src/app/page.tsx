import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import Image from "next/image";

import "./styless/home.scss";
import SocialButtons from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
      <Header></Header>
      <Experience></Experience>
      <Information></Information>
      <div className="buttons">
        <SocialButtons></SocialButtons>
        <a
          className="primary-btn"
          href="mailto:patrickandradeflausino@gmail.com"
        >
          CONTACT ME
          <Image
            src="/ic_outline-email.png"
            alt="icone email de contato"
            width={24}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
