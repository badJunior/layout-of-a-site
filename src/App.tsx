import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import WelcomePage from "./pages/welcome/welcomePage";
import ContactsPage from "./pages/contacts/contactsPage";

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <div className="top-0 sticky ">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>



        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;

