import s from "./Catalog.module.scss";
import { Container } from "../../views/Container/Container";

export const Catalog = ({ data }) => (
  <nav className={s.catalog}>
    <Container className={s.container}>
      <ul className={s.list}>
        {data.map((item, i) => (
          <li key={i}>
            <a className={s.link} href={`/catalog?slug=${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);
