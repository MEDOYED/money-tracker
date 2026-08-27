import styles from "./SpendingCategories.module.scss";

function SpendingCategories() {
    return (
        <section className={styles.categories}>
            <div className={styles.categoryList}>
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

            <button
                className={styles.addButton}
                type="button"
            >
                +
            </button>
        </section>
    );
}

export default SpendingCategories;