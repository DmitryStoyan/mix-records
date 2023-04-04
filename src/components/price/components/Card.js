import styles from "./styles.module.css";
import album from "../../../images/album.png";

export const arr = [
  {
    img: album,
    title: "Сведение и мастеринг",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "от 4500 р",
  },
  {
    img: album,
    title: "Сведение и мастеринг",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "от 4500 р",
  },
];

export function Card() {
  return (
    <>
      {arr.map((props) => (
        <div className={styles.price_card}>
          <div className={styles.card_wrapper}>
            <img src={props.img} alt="mic" className={styles.price_image} />
            <p className={styles.price_name}>{props.title}</p>
            <p className={styles.price_subtitle}>{props.subtitle}</p>
            <p className={styles.price}>{props.price}</p>
          </div>
        </div>
      ))}
    </>
  );
}

// export function Card() {
//   return (
//     <div className={styles.price_card}>
//       <div className={styles.card_wrapper}>
//         <img src={album} alt="mic" className={styles.price_image} />
//         <p className={styles.price_name}>Сведение и мастеринг</p>
//         <p className={styles.price_subtitle}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
//           rem aliquam, quis quod eius blanditiis? Exercitationem tempore sint
//           necessitatibus, facilis ea corrupti odio odit temporibus, eaque eos
//           nisi vel!
//         </p>
//         <p className={styles.price}>от 4500 р</p>
//       </div>
//     </div>
//   );
// }
