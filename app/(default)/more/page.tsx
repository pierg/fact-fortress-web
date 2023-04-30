export const metadata = {
  title: "Fact Fortress — More Information",
};

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

          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 className="h3 mb-3 text-center">An On-Chain Zero-Knowledge Proof Solution to Fact-Checking</h3>
              <p className="text-xl text-gray-600">Fact Fortress is a blockchain-integrated solution that democratizes the use of zero-knowledge proofs to ensure the integrity of private data. It provides a user-friendly interface for generating proofs off-chain through a circuit generator that leverages the Noir language and facilitates on-chain verification of the proofs on Ethereum.</p>
              <p className="text-xl text-gray-600">By enabling the validation of data integrity without revealing the data itself, our solution offers a powerful mechanism for preserving the privacy of sensitive information while ensuring the security and transparency of blockchain technology.</p>
              <p className="text-xl text-gray-600">
                <Link
                  href="https://github.com/pierg/fact-fortress-dapp"
                  rel="noopener noreferrer" target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >DApp
                </Link>
              </p>
              <p className="text-xl text-gray-600">
                <Link
                  href="https://github.com/pierg/fact-fortress-compiler"
                  rel="noopener noreferrer" target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >Compiler
                </Link>
              </p>
              <p className="text-xl text-gray-600">
                <Link
                  href="https://github.com/pierg/fact-fortress-web"
                  rel="noopener noreferrer" target="_blank"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >Web
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
