import { Routes, Route } from "react-router-dom";

import { SpendingPage } from "@pages/spending";
import { IncomePage } from "@pages/Income";
import { HistoryPage } from "@pages/history";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SpendingPage />} />
      <Route path="/income" element={<IncomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;