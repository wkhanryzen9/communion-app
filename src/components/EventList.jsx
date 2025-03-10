const EventList = ({ events }) => {
    return (
      <div>
        {events.map((event) => (
          <div key={event.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventList;
  