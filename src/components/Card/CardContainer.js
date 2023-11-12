import React, { useState, useEffect } from "react";
import Card from "./Card"; // Подключите ваш компонент Card
import styles from "./CardContainer.module.css";
import data from "./data.json"; // Импортируем данные

const CardContainer = ({ value }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос на сервер для получения данных
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api/items");
        if (!response.ok) {
          throw new Error(`Failed to fetch items. Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data); // Обновляем состояние с полученными данными
      } catch (error) {
        console.error("Error fetching items:", error);
        // Обработка ошибок, если необходимо
      }
    };

    fetchData();
    setItems(data.items);
    console.log(data); // Вызываем функцию получения данных при монтировании компонента
  }, []); // Пустой массив зависимостей гарантирует, что запрос будет выполнен один раз при монтировании

  return (
    <div className={styles.cardsContainer}>
      {items
        .filter((item) => item.category === value)
        .map((item) => {
          if(item.length == 0){
            return (<h2>Товаров не найдено</h2>)
          }
          console.log("Filtered Item:", item); // Консоль лог для отфильтрованных элементов
          return <Card key={item.id} item={item} type="viewInfo" />;
          // Вы можете использовать различные значения для 'type' в зависимости от типа карточки
        })}
        {items.filter((item) => item.category === value).length === 0 && (
        <h2 className={styles.notFound}>В этой категории нет предметов</h2>
      )}
    </div>
  );
};

export default CardContainer;
