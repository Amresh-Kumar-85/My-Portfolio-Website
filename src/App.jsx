import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Helmet>
        <title>Amresh Kumar | MERN Stack Developer</title>
        <meta
          name="description"
          content="Explore my portfolio and latest React/MERN stack projects."
        />
        <meta
          name="keywords"
          content="Amresh Kumar, Web Developer, MERN Stack, React Projects"
        />
      </Helmet>
    </>
  );
}

export default App;
