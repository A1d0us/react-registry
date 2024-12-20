import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}