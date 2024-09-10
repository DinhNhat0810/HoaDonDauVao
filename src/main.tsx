import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/app.context.tsx";
import { NotificationProvider } from "./contexts/notification.context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <NotificationProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </NotificationProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
