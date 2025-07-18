import { Header, Footer, Card } from "./components";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
           <AllRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
