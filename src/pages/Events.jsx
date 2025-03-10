import { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Header from "../components/Header";

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Community Prayer", date: "2025-04-10", category: "Religious", location: "City Church" },
    { id: 2, title: "Charity Drive", date: "2025-05-15", category: "Charity", location: "Community Hall" },
  ]);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  return (
    <div>
      <Header />
      <h2>Event Listings</h2>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
};

export default Events;
