import styles from "./styles.module.css";
import album from "../../../images/album.png";
export function Card() {
  return (
    <div className={styles.price_card}>
      <div className={styles.card_wrapper}>
        <img src={album} alt="mic" className={styles.price_image} />
        <p className={styles.price_name}>Сведение и мастеринг</p>
        <p className={styles.price_subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          rem aliquam, quis quod eius blanditiis? Exercitationem tempore sint
          necessitatibus, facilis ea corrupti odio odit temporibus, eaque eos
          nisi vel!
        </p>
        <p className={styles.price}>от 4500 р</p>
      </div>
    </div>
  );
}
