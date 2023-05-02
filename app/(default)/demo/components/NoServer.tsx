import React from "react";
import YouTube from "react-youtube";
import Link from "next/link";

export default function NoServer() {
  const videoOps = {
    height: "472",
    width: "840",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      {/* Description */}

      <div className="text-center pb-12 md:pb-16">
        <h4
          className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-300"
          data-aos="zoom-y-out"
        >
          The server is currently offline.
        </h4>
        <h4
          className="text-2xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          To get started, refer to the instructions
          <Link
            href="https://github.com/pierg/fact-fortress-dapp"
            legacyBehavior={true}
          >
            <a className="text-blue-500 hover:text-blue-600"> on GitHub. </a>
          </Link>
        </h4>
      </div>

      <div className="text-center pb-12 md:pb-16">
        <h4
          className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-3"
          data-aos="zoom-y-out"
        >
          Alternateveley, you can watch the demo video below.
        </h4>
        <div
          className="relative flex justify-center mb-8"
          data-aos="zoom-y-out"
          data-aos-delay="450"
        >
          <YouTube videoId="wnLGjsVXzus" opts={videoOps} />
        </div>
      </div>
    </div>
  );
}
