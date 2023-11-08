import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./global.css";
import * as style from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.layoutWrapper}>
      <Header />
      <main id="main">{children}</main>
      <Footer className={style.layoutFooter} />
    </div>
  );
};

export default Layout;
