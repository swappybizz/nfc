import React from "react";
import ada from "../assets/ada.png";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Din Lokale Taktekker
              <br></br>
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Sunnmøre Tak AS er et allsidig firma i takbransjen. Vi tilbyr tak
              tilpaset til ditt ønske. Våres lange erfaring garanterer
              profesjonell utførelse av dine prosjekt, tilpaset et krevende
              norsk kyst klima. Vi tilbyr hjelp til valg av kvalitetmaterialer,
              faglig rådgiving samt estetisk og langvarig produkt.
            </p>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Ring oss ☎️
              </h1>
            <div class="flex justify-center">
              <a
                href="tel:+4746268749"
                class="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg"
              >
                46268749
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={ada}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
