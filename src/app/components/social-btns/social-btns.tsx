import Image from "next/image";

import "./social.btns.scss";
import GithubIcon from "../icons/github";
import TwitterIcon from "../icons/twitter";
import LinkedinIcon from "../icons/linkedin";
import InstagramIcon from "../icons/instagram";

export default function SocialButtons() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/andradeepatrick/">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/patrick-de-andrade-flausino/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/patrick-andrade-flausino">
        <GithubIcon />
      </a>
      <a href="#">
        <TwitterIcon />
      </a>
    </div>
  );
}
