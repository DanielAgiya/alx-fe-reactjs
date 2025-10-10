import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to="/profile">Go to Profile</Link> |{" "}
      <Link to="/blog/1">Go to Blog Post 1</Link>
    </div>
  );
}

export default Home;
