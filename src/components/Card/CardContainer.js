import React, { useState, useEffect } from "react";
import Card from "./Card"; // Подключите ваш компонент Card
import styles from "./CardContainer.module.css";
import data from "./data.json"; // Импортируем данные

const CardContainer = () => {
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
      {items.map((item) => (
        <Card key={item.id} item={item} type="viewInfo" />
        // Вы можете использовать различные значения для 'type' в зависимости от типа карточки
      ))}
    </div>
  );
};

export default CardContainer;
