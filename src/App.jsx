import { Link } from "react-router-dom";
import "./App.css";
import RouterComponent from "./router/RouterComponent";

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            backgroundColor: "#f6f6f6",
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <Link to="/">home</Link>
            <Link to="product">product</Link>
            <Link to="login">login</Link>
            <Link to="register">register</Link>
          </nav>
        </header>
        <main style={{ backgroundColor: "#f2f2f2", flex: 4, width: "100%", paddingTop: "20px" }}>
          <RouterComponent />
        </main>
        <footer style={{ backgroundColor: "#ccc", flex: 1, width: "100%" }}>©️ me 2024</footer>
      </div>
    </>
  );
}

export default App;
