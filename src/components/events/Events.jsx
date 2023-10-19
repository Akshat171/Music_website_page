const getEvents = async () => {
  const res = await fetch("https://music-data-1j4p.onrender.com/events");
  return res.json();
};

import React from "react";
import EventBox from "./EventBox";
import SectionHeader from "../SectionHeader";

const Events = async () => {
  const events = await getEvents();
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle="World Tour" title="Ucoming events" />
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;
