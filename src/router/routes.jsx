import { createBrowserRouter } from "react-router";

import AppLayout from "./components/layout/AppLayout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Archive from "./pages/Archive/Archive";
import Board from "./pages/Board/Board";
import Projects from "./pages/Projects/Projects";
import Reports from "./pages/Reports/Reports";
import Calender from "./pages/Calender/Calender";
import Tasks from "./pages/Tasks/Tasks";
import Members from "./pages/Members/Members";
import Settings from "./pages/Settings/Settings";

/**
 * Application route configuration with AppLayout as the shared parent layout.
 */
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "archive", element: <Archive /> },
            { path: "board", element: <Board /> },
            { path: "calender", element: <Calender /> },
            { path: "tasks", element: <Tasks /> },
            { path: "members", element: <Members /> },
            { path: "projects", element: <Projects /> },
            { path: "reports", element: <Reports /> },
            { path: "settings", element: <Settings /> },
        ],
    },
]);
