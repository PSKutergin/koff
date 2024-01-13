import s from "./Catalog.module.scss";
import { Container } from "../../views/Container/Container";

export const Catalog = () => (
  <section className={s.catalog}>
    <Container>
      <ul className={s.list}>
        <li className={s.item}>Диваны</li>
        <li className={s.item}>Шкафы</li>
        <li className={s.item}>Стулья</li>
        <li className={s.item}>Тумбы</li>
        <li className={s.item}>Кровати</li>
        <li className={s.item}>Столы</li>
        <li className={s.item}>Комоды</li>
        <li className={s.item}>Матрасы</li>
        <li className={s.item}>Пуфики</li>
        <li className={s.item}>Стеллажи</li>
      </ul>
    </Container>
  </section>
);
