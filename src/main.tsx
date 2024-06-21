import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/app.context.tsx";
import { NotificationProvider } from "./contexts/notification.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
