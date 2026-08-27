import { TopBar } from "@/widgets/top-bar";
import SpendingCategories from "@/widgets/spending-categories/ui/SpendingCategories";
import styles from "./SpendingPage.module.scss";

function SpendingPage() {
    return (
        <>
            <TopBar />

            <main className={styles.page}>

                <SpendingCategories />

                <section className={styles.amount}>
                    <input
                        type="number"
                        placeholder="Сумма"
                    />

                    <span>123,12</span>

                    <button type="button">
                        Save
                    </button>
                </section>

                <section className={styles.description}>
                    <textarea
                        placeholder="Описание расхода"
                    />
                </section>
            </main>
        </>
    );
}

export default SpendingPage;