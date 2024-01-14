import s from "./Main.module.scss";
import { Goods } from "../../components/Goods/Goods.jsx";
import { Catalog } from "../../components/Catalog/Catalog.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice.js";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>;
  if (errorCategories) return <div>Произошла ошибка: {errorCategories}</div>;

  return (
    <main className={s.main}>
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
};
