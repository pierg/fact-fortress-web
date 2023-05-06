import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import portraitPierGiuseppe from "@/public/images/people/piergiuseppe.jpeg";
import portraitGuillaume from "@/public/images/people/guillaume.jpg";

export const metadata = {
  title: "Fact Fortress — People",
};

export default function People() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">People</h1>
          </div>
          {/* Portraits and descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pier Giuseppe */}
            <div className="flex flex-col justify-center items-center">
              <div className="relative h-48 w-48 md:h-48 md:w-48">
                <Image
                  src={portraitPierGiuseppe}
                  alt="Portrait of Piergiuseppe"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-center mt-6">
                <h4 className="h4">Piergiuseppe Mallozzi</h4>
                <p className="text-gray-500 mb-4">
                  Postdoctoral Researcher at UC Berkeley
                </p>
                <p>
                  <Link href="/" legacyBehavior={true}>
                    <a className="text-blue-500 hover:text-blue-600">
                      Personal Website
                    </a>
                  </Link>
                </p>
                <p>
                  <Link href="https://github.com/pierg/" legacyBehavior={true}>
                    <a className="text-blue-500 hover:text-blue-600">Github</a>
                  </Link>
                </p>
              </div>
            </div>
            {/* Guillaume */}
            <div className="flex flex-col justify-center items-center">
              <div className="relative h-48 w-48 md:h-48 md:w-48">
                <Image
                  src={portraitGuillaume}
                  alt="Portrait of Guillaume"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-center mt-6">
                <h4 className="h4">Guillaume Lethuillier</h4>
                <p className="text-gray-500 mb-4">
                  Blockchain Software Developer at Blockdaemon
                </p>
                <p>
                  <Link
                    href="https://www.linkedin.com/in/guillaume-lethuillier"
                    legacyBehavior={true}
                  >
                    <a className="text-blue-500 hover:text-blue-600">
                      LinkedIn
                    </a>
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://github.com/glethuillier"
                    legacyBehavior={true}
                  >
                    <a className="text-blue-500 hover:text-blue-600">
                      Personal Github
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
