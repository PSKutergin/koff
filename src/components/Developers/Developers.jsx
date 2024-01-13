import s from "./Developers.module.scss";

export const Developers = () => (
  <ul className={s.developers}>
    <li>
      Designer:{" "}
      <a
        className={s.link}
        href="https://t.me/Mrshmallowww"
        target="_blank"
        rel="noopener noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li>
      Developer:{" "}
      <a
        className={s.link}
        href="https://t.me/p_kutergin"
        target="_blank"
        rel="noopener noreferrer">
        Pavel Kutergin
      </a>
    </li>
  </ul>
);
