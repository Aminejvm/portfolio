import Router, { useRouter } from "next/router";
import React from "react";

const Context = React.createContext({ routes: [] });
export const useRouteHistory = () => React.useContext<{ routes: string[] }>(Context);

const Provider: React.FC = ({ children }) => {
  const routes = React.useRef([]);
  const router = useRouter();

  Router.events.on("routeChangeStart", () => {
    routes.current.push(router.asPath);
  });

  return <Context.Provider value={{ routes: routes.current }}>{children}</Context.Provider>;
};

export default Provider;
