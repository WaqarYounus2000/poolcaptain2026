import "@/styles/Services.css";

export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} />

      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
}