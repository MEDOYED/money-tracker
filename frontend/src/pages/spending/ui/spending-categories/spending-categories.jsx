import s from "./spending-categories.module.scss";

const CATEGORIES = [
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
  "🍔",
];

export const SpendingCategories = () => {
  return (
    <section className={s.categories}>
      <div className={s.categoryList}>
        {CATEGORIES.map((category, index) => (
          <div className={s.category} key={index}>
            {category}
          </div>
        ))}
      </div>

      <button className={s.addButton} type="button">
        +
      </button>
    </section>
  );
};
