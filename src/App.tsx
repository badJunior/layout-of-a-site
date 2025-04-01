import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import WelcomePage from "./pages/welcome/welcomePage";
import ContactsPage from "./pages/contacts/contactsPage";
import DictionaryPage from "./pages/dictionary/dictionaryPage";
import CertificatePage from "./pages/certificate/certificatePage";
import CoursesPage from "./pages/courses/coursesPage";
import TheoryPage from "./pages/courses/theoryPage";
import TheoryWithVerionsAnsweresPage from "./pages/courses/theoryWithVersionsAnsweres";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col">
          <div className="top-0 sticky ">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/theory/about" element={<TheoryPage />} />

            <Route path="/courses/theory/test" element={<TheoryWithVerionsAnsweresPage />} />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

