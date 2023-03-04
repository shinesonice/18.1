import { Navigate, Route, Routes } from "react-router";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./UI/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
