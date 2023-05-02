export const metadata = {
  title: "Fact Fortress — More Information",
};

import Image from "next/image";
import Overview from "@/public/images/end-to-end-500.png";

import Link from "next/link";

export default function More() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">Learn More about Fact Fortress</h1>
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 className="h3 mb-3 text-center">
                An On-Chain Zero-Knowledge Proof Solution to Fact-Checking
              </h3>
              <p className="text-xl text-gray-600">
                Fact Fortress is a blockchain-based framework that uses
                zero-knowledge proofs for trustworthy and private fact-checking.
                It ensures trustworthy data handling and computation by using
                proofs of data provenance and auditable data access policies.
                The solution democratizes circuit construction and deployment
                with a circuit compiler that supports various data formats and
                source authentication, and facilitates on-chain verification.
                This preserves sensitive data privacy while ensuring
                accountability and transparency in data handling and
                computation. It achieves this by enabling on-chain verification
                of computation and data provenance without revealing any
                information about the data itself.
              </p>
            </div>
            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <p className="text-xl text-gray-600">
                Our framework provides a comprehensive solution that covers the
                entire process from circuit generation to proof generation,
                while facilitating collaboration among data analysts, data
                providers, external verifiers, and policy auditors.
              </p>
            </div>
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="relative h-3/4 w-3/4 md:h-3/4 md:w-3/4">
                  <Image src={Overview} alt="Overview" />
                </div>
              </div>
            </div>

            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="pt-32 pb-12 md:pt-40 md:pb-20 text-center">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center">
                  <h1
                    className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-y-out"
                  >
                    Check out Fact Fortress{" "}
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                      on Github{" "}
                    </p>
                  </h1>
                </div>

                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 text-center">
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl text-gray-600">
                      <Link
                        href="https://github.com/pierg/fact-fortress-dapp"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h4 text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        Fact Fortress Smart Contracts
                      </Link>
                    </p>
                  </div>
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl text-gray-600">
                      <Link
                        href="https://github.com/pierg/fact-fortress-compiler"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h4 text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        Fact Fortress Compiler
                      </Link>
                    </p>
                  </div>
                  <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xl text-gray-600">
                      <Link
                        href="https://github.com/pierg/fact-fortress-web"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h4 text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        Fact Fortress Web
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
