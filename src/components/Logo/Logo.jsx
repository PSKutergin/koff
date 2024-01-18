import { Link } from "react-router-dom";
import s from "./Logo.module.scss";
import logoSvg from "./logo.svg";

export const Logo = () => (
  <Link to="/">
    <img className={s.img} src={logoSvg} alt="logo" />
  </Link>
);
