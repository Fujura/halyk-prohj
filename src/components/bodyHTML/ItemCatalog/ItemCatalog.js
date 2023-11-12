import styles from "./ItemCatalog.module.css";
import img1 from "./furniture.jpg";
import img2 from "./electronics.png";
import img3 from "./tripple-dot.webp";
import { Link } from "react-router-dom";

const ItemCatalog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className={styles.item_container}>
            <h4 className={styles.title}>Мебель</h4>
            <div
              style={{ backgroundImage: `url(${img1})` }}
              alt="img"
              className={styles.image}
            ></div>
            <button className={styles.button}>Открыть</button>
          </div>
        </div>

        <div className="col-xl-4 col-md-6">
          <div className={styles.item_container}>
            <h4 className={styles.title}>Электроника</h4>
            <div
              style={{ backgroundImage: `url(${img2})` }}
              alt="img"
              className={styles.image}
            ></div>
            <button className={styles.button}>
              <Link to="/items" className="text-white text-decoration-none">
                Открыть
              </Link>
            </button>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className={styles.item_container}>
            <h4 className={styles.title}>Прочее</h4>
            <div
              style={{ backgroundImage: `url(${img3})` }}
              alt="img"
              className={styles.image}
            ></div>
            <button className={styles.button}>Открыть</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCatalog;
