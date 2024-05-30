
import Hero from "@/components/Hero/Hero";
import NewCollections from "@/components/NewCollections/NewCollections";
import NewLetters from "@/components/NewLetters/NewLetters";
import Offre from "@/components/Offre/Offre";
import Popular from "@/components/Popular/Popular";
import React, { createContext, useState } from "react";

export default function Home() {

  return (


    <main>
      <Hero />
      <Popular />
      <Offre />
      <NewCollections />
      <NewLetters />
    </main>
    // </appContext.Provider>
  );
}
