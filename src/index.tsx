import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VIEW_ID } from "./env";

kintone.events.on("app.record.index.show", (event) => {
  const container = document.getElementById("root");
  if (container == null) return;
  if (event.viewId !== VIEW_ID) return;
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
