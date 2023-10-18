import type { MetaFunction } from "@remix-run/node";
import Home from "./Home";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function Index() {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
}

export default Index;
