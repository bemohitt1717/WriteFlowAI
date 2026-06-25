import { Analytics } from "@vercel/analytics/react";
import { AppRoute } from "./routes/AppRoute";

function App() {
  return (
    <>
      <AppRoute />
      <Analytics />
    </>
  );
}

export default App;
