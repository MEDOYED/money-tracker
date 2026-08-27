import s from "./spending-categories.module.scss";

export const SpendingCategories = () => {
  return (
    <section className={s.categories}>
      <div className={s.categoryList}>
        <button type="button">🍔</button>
        <button type="button">🚗</button>
        <button type="button">🏠</button>
        <button type="button">🛒</button>
        <button type="button">💊</button>
        <button type="button">🎮</button>
        <button type="button">☕</button>
        <button type="button">✈️</button>
        <button type="button">👕</button>
      </div>

      <button className={s.addButton} type="button">
        +
      </button>
    </section>
  );
};
