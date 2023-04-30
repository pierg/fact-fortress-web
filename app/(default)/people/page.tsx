export const metadata = {
  title: "Fact Fortress — People",
};
import Image from 'next/image'
import Link from "next/link";
import portraitPierGiuseppe from '@/public/images/people/piergiuseppe.jpeg'
import portraitGuillaume from '@/public/images/people/guillaume.jpg'

export default function SignIn() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">People</h1>
          </div>

          <div className="max-w-3xl mx-auto grid text-center">
            <div className="container">
              <div className="photo-A"><Image className="mx-auto" src={portraitPierGiuseppe} width={230} height={300} priority alt="Portrait"/></div>
              <div className="Photo-B"><Image className="mx-auto" src={portraitGuillaume} width={230} height={300} priority alt="Portrait"/></div>
              <div className="Name-A"><b>PierGiuseppe Mallozzi</b></div>
              <div className="Name-B"><b>Guillaume Lethuillier</b></div>
              <div className="Occupation-A">Postdoctoral Researcher at UC Berkeley</div>
              <div className="Occupation-B">Blockchain Software Developer at Blockdaemon</div>
              <div className="Email-A">---</div>
              <div className="Email-B">zkp@glthr.com</div>
              <div className="Links-A"><ul className="nobull"><li>
                <Link
                  href="https://pierg.github.io"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >Personal website</Link></li><li>
                  <Link
                    href="https://github.com/pierg"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >Github</Link>
                </li>
              </ul>
              </div>
              <div className="Links-B"><ul className="nobull"><li>
                <Link
                  href="https://www.linkedin.com/in/guillaume-lethuillier"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >LinkedIn</Link></li>
                <li>
                  <Link
                    href="https://github.com/glethuillier"
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
