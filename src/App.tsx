import Header from "./components/header";
import WelcomePage from "./pages/welcome/welcomePage";

function App() {


  return (
    <div className="flex flex-col">
      <div className="top-0 sticky ">
        <Header />
      </div>

      <WelcomePage />
    </div>

  );
}




export default App;

