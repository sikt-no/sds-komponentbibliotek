import * as style from "./swatch.module.css";

export const Swatch = ({ color }: { color: string }) => {
  return <div className={style.swatch} style={{ backgroundColor: color }} />;
};
