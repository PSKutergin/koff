import s from "./Goods.module.scss";
import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";

export const Goods = () => (
  <section className={s.goods}>
    <Container>
      <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>

      <ul className={s.list}>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);
