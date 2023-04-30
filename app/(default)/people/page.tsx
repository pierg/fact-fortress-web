export const metadata = {
  title: "Fact Fortress — People",
};
import Image from 'next/image'
import Link from "next/link";
import portraitPierGiuseppe from '@/public/images/people/piergiuseppe.jpeg'
import portraitGuillaume from '@/public/images/people/guillaume.jpg'
import Head from 'next/head'

export default function People() {
  return (

    <section className="bg-gradient-to-b from-gray-100 to-white">
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">People</h1>
          </div>

          <div className="max-w-3xl mx-auto grid text-center">
            <div className="container">
              <div className="photo-A"><Image className="mx-auto" src={portraitPierGiuseppe} width={230} height={300} priority alt="Portrait" /></div>
              <div className="Photo-B"><Image className="mx-auto" src={portraitGuillaume} width={230} height={300} priority alt="Portrait" /></div>
              <div className="Name-A"><b>PierGiuseppe Mallozzi</b></div>
              <div className="Name-B"><b>Guillaume Lethuillier</b></div>
              <div className="Occupation-A"><i>Postdoctoral Researcher at UC Berkeley</i></div>
              <div className="Occupation-B"><i>Blockchain Software Developer at Blockdaemon</i></div>
              <div className="Email-A"></div>
              <div className="Email-B"></div>
              <div className="Links-A"><ul className="nobull"><li>
                <Link
                  href="https://pierg.github.io"
                  rel="noopener noreferrer" target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >Personal website
                </Link>
              </li>
                <li>
                  <Link
                    href="https://github.com/pierg"
                    rel="noopener noreferrer" target="_blank"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >Github</Link>
                </li>
              </ul>
              </div>
              <div className="Links-B"><ul className="nobull"><li>
                <Link
                  href="https://www.linkedin.com/in/guillaume-lethuillier"
                  rel="noopener noreferrer" target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >LinkedIn</Link></li>
                <li>
                  <Link
                    href="https://github.com/glethuillier"
                    rel="noopener noreferrer" target="_blank"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >Github (personal)</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
