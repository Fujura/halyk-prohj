import styles from './ItemCatalog.module.css'
import img1 from './chair.webp'
const ItemCatalog = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className={styles.item_container}>
                        <h4>Мебель</h4>
                        <div 
                        style={{ backgroundImage: `url(${img1})`}}
                        alt='img'
                        className={styles.image}
                        ></div>
                        <button className={styles.button}>Открыть</button>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className={styles.item_container}>
                        <h4>Электроника</h4>
                        <img></img>
                        <button className={styles.button}>Открыть</button>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className={styles.item_container}>
                        <h4>Прочее</h4>
                        <img></img>
                        <button className={styles.button}>Открыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCatalog;