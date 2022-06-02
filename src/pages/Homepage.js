import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../App";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
     <div className="card-component-container"> <Card className="card-component" /></div>
      <Footer />
    </div>
  );
}
