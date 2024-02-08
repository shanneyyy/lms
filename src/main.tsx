import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AppLayout from "./pages/app/layout";
import Books from "./pages/app/books/books";
import Dashboard from "./pages/app/dashboard/dashboard";
import Users from "./pages/app/users/users";
import Borrow from "./pages/borrow/borrow";
import Feedback from "./pages/feedback/feedback";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Outlet />
            </AppLayout>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="users" element={<Users />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
