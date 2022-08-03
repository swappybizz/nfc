import React from "react";
import neptune from "../assets/neptun.jpg";
import Terrasse from "../assets/Terrasse.jpg";
import takbilde from "../assets/Takb.jpg";

const HomeMenu = () => {
  return (
    <>
      <section className="text-gray-00 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Våre tjenester
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              -Ny bygg , Rehabilitering av tak og terrasse (omtekking,
              etterisolering) ,Tak inspeksjon, servis og reperasjon ,Sveising av
              membraner: pvc, asfaltbelegg, radonsperre, baseng membran etc.
              ,Tømrer arbeid i samsvar med ombygging av tak og terrasse
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={neptune}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Skrå Tak
                </h2>
                <p className="leading-relaxed text-base">
                  På skrå tak vi tilbyr mange typer av tekking som:
                </p>

                <ul>
                  <li>Decra</li>
                  <li>Takstein</li>
                  <li>Skifer</li>
                  <li>PVC Folie med profiler</li>
                </ul>
                
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={Terrasse}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Terrasse
                </h2>
                <p className="leading-relaxed text-base">
                  På terrasse vi tilbyr:
                </p>
                <ul>
                  <li>Pvc membran</li>
                  <li>asfaltbelegg</li>
                  
                </ul>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={takbilde}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Flate tak
                </h2>
                <p className="leading-relaxed text-base">
                  Påflate tak vi tilbyr:
                </p>
                <ul>
                  <li>Pvc membran</li>
                  <li>asfaltbelegg</li>
                  <li>Tak mekanisk festet eller balastert</li>
                  <li>Isolering me mineralull of Eps</li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
