import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/public/images/logo-svg.svg";

export default function Logo() {
  const isLocalhost =
    typeof window !== "undefined" && window.location.hostname === "localhost";

  return (
    <a
      href={isLocalhost ? "/" : "/fact-fortress-web/"}
      className="block"
      aria-label="FactFortress"
    >
      <Image src={logoSvg} alt="Fact Fortress Logo" width={60} height={40} />
    </a>
  );
}
