import Image from "next/image";

import "./header.scss";
export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m Patrick! 👋</h1>
        <h2>Software Developer</h2>
      </div>
      <Image
        src="/perfil-mobile1.png"
        alt="Next.js Logo"
        width={325}
        height={277}
        priority
      />
    </div>
  );
}
