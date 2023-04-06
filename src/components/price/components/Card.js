import styles from "./styles.module.css";

export function Card({ card }) {
  return (
    <>
      <div className={styles.price_card}>
        <div className={styles.card_wrapper}>
          <img src={card.img} alt="mic" className={styles.price_image} />
          <h3 className={styles.price_name}>{card.title}</h3>
          <p className={styles.price_subtitle}>{card.subtitle}</p>
          <p className={styles.price}>{card.price}</p>
        </div>
      </div>
    </>
  );
}
