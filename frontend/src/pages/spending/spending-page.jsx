import { TopBar } from "@/widgets/top-bar";

import { SpendingCategories } from "./ui/spending-categories/spending-categories";

import s from "./spending-page.module.scss";

export const SpendingPage = () => {
  return (
    <>
      <TopBar />

      <main className={s.page}>
        <SpendingCategories />

        <section className={s.amount}>
          <input type="number" placeholder="Сумма" />

          <span>123,12</span>

          <button type="button">Save</button>
        </section>

        <section className={s.description}>
          <textarea placeholder="Описание расхода" />
        </section>
      </main>
    </>
  );
};
