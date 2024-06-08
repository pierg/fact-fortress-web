import Link from "next/link";
import Image from "next/image";
import logoSvg from "@/public/images/logo-svg.svg";
import { useRouter } from 'next/router';

export default function Logo() {
  const { basePath } = useRouter();

  return (
    <Link href="/" passHref>
      <a className="block" aria-label="FactFortress">
        <Image src={`${basePath}/images/logo-svg.svg`} alt="Fact Fortress Logo" width={60} height={40} />
      </a>
    </Link>
  );
}
