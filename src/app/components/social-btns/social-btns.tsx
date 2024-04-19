import Image from "next/image";

import "./social.btns.scss";

export default function SocialButtons() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/andradeepatrick/">
        <Image
          src="/instagram.png"
          alt="icone email de contato"
          width={20}
          height={20}
          priority
        />
      </a>
      <a href="https://www.linkedin.com/in/patrick-de-andrade-flausino/">
        <Image
          src="/linkedin.png"
          alt="icone email de contato"
          width={20}
          height={20}
          priority
        />
      </a>
      <a href="https://github.com/patrick-andrade-flausino">
        <Image
          src="/github.png"
          alt="icone email de contato"
          width={20}
          height={20}
          priority
        />
      </a>
      <a href="#">
        <Image
          src="/twitter.png"
          alt="icone email de contato"
          width={20}
          height={20}
          priority
        />
      </a>
    </div>
  );
}
