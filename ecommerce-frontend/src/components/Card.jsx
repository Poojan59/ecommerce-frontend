export default function Card(props) {
  return (
    <div
      style={{
        width: "350px",
        padding: "40px",
        borderRadius: "40px",
        backgroundColor: "white",
        boxShadow: "0 0 50px rgba(70, 159, 197, 0.67)",
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <small>Category: {props.category}</small>
      <h5>Price: {props.price}</h5>
    </div>
  );
}
