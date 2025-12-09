import Card from "./Card";

export default function Home() {
  // Dummy product data 
  const products = [
    {
      title: "SB Dunk",
      description: "One of the most seller",
      category: "Sneker",
      price: "35,000",
    },
    {
      title: "Nike T-shirt",
      description: "A black T-shirt with white logo of Nike",
      category: "Fashion",
      price: "5000",
    },
    {
      title: "Nike Shoes",
      description: "Comfortable sports shoes",
      category: "sports",
      price: "10,000",
    },
    {
      title: "Nike x Traviscote",
      description: "Most hyped Snekers",
      category: "sneker",
      price: "1,00,000",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#faf2fbff",
        minHeight: "600px",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "20px" }}>
        Welcome to Sneakers Elite
      </h1>

      <p style={{ fontSize: "18px" }}>Check out our latest products below:</p>

      {/* CARD LIST */}
      <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
        {products.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
