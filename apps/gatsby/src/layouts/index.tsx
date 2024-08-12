import type { PageProps } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./global.css";
import * as style from "./layout.module.css";

const Layout = ({ location, children }: PageProps) => {
  return (
    <div className={style.layoutWrapper}>
      <Header currentHref={location.pathname} />
      <main id="main">{children}</main>
      <Footer className={style.layoutFooter} />
    </div>
  );
};

export default Layout;
