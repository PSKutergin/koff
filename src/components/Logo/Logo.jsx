import s from "./Logo.module.scss";
import logoSvg from "./logo.svg";

export const Logo = () => (
  <a href="/">
    <img className={s.img} src={logoSvg} alt="logo" />
  </a>
);
