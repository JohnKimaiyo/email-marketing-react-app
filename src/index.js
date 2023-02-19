import { createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Container, Navbar, Nav } from "react-bootstrap";

//import pages

import HomePage from "./pages/HomePage";
import City from "./pages/City";
import Gender from "./pages/Gender";
import LivingStatus from "./pages/LivingStatus";
import MaritalStatus from "./pages/MaritalStatus";
import State from "./pages/State";
import Time from "./pages/Time";
import Year from "./pages/Year";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const routes = [
  { path: "/", name: "HomePage", element: <HomePage />, nodeRef: createRef() },
  { path: "/city", name: "City", element: <City />, nodeRef: createRef() },
  {
    path: "/gender",
    name: "Gender",
    element: <Gender />,
    nodeRef: createRef(),
  },
  {
    path: "/marital",
    name: "Marital",
    element: <MaritalStatus />,
    nodeRef: createRef(),
  },
  {
    path: "/livingstatus",
    name: "LivingStatus",
    element: <LivingStatus />,
    nodeRef: createRef(),
  },
  {
    path: "/maritalstatus",
    name: "MaritalStatus",
    element: <MaritalStatus />,
    nodeRef: createRef(),
  },
  {
    path: "/notfound",
    name: "NotFound",
    element: <NotFound />,
    nodeRef: createRef(),
  },
  { path: "/state", name: "State", element: <State />, nodeRef: createRef() },
  {
    path: "/summary",
    name: "Summary",
    element: <Summary />,
    nodeRef: createRef(),
  },
  { path: "/time", name: "Time", element: <Time />, nodeRef: createRef() },
  { path: "/year", name: "Year", element: <Year />, nodeRef: createRef() },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
export default function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};
  return (
    <>
      <Navbar bg="light">
        <Nav className="mx-auto">
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            className="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<RouterProvider router={router} />);
