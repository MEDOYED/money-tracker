import s from "./spending-categories.module.scss";

const categories = ['🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔', '🍔'];

export const SpendingCategories = () => {
  return (
    <section className={s.categories}>
      <div className={s.categoryList}>
        {categories.map((category, index) => (
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
