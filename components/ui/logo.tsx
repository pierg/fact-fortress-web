import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/public/images/logo-svg.svg";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={logoSvg} alt="Cruip Logo" width={60} height={40} />
    </Link>
  );
}
