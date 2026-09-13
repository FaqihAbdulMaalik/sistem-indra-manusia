import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import IndraDetail from "./pages/indra/page.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/indra/:id" element={<IndraDetail />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
