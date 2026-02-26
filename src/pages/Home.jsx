import { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Container, Typography } from "@mui/material";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMobiles();
  }, []);

  const fetchMobiles = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch mobiles");
      }

      const data = await response.json();
      setProducts(data.products); // IMPORTANT
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch mobiles");
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{ my: 3, fontWeight: "bold" }}
      >
        Mobile Store 📱
      </Typography>

      <Search search={search} setSearch={setSearch} />

      {loading && <Loader />}
      {error && <Typography color="error">{error}</Typography>}

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default Home;