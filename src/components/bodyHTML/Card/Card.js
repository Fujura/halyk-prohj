import styles from "./Card.module.css";
import { useState } from "react";
const predefinedAddresses = [
  "ул. Абая, 123",
  "пр. Назарбаева, 456",
  "ул. Достык, 789",
  "пер. Толе би, 101",
  "пр. Райымбека, 222",
  "ул. Гоголя, 333",
  "пр. Аль-Фараби, 444",
  "ул. Байтурсынова, 555",
  "пер. Сатпаева, 666",
  "ул. Тимирязева, 777",
];
export default function Card({ item, type }) {
  if (type === "viewInfo") {
    return <CardInfo item={item} />;
  }
  if (item.location !== null) {
    return <CardPresent item={item} />;
  } else {
    return <CardOnTheWay item={item} />;
  }
}

function CardOnTheWay({ item }) {
  return (
    <div className={styles.cardContainer}>
      <h1>{item.name}</h1>
      <img src={item.photoUrl}></img>
      <p>Категория: {item.category}</p>
      <p>Дата отправки: {item.sentDate}</p>
      <p>В пути: {item.expectedLocation}</p>
      <p>Количество: {item.numbers}</p>
      <div className={styles.buttonContainer}>
        <button>Удалить</button>
        <button>Добавить</button>
      </div>
    </div>
  );
}

function CardPresent({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLocation, setEditedLocation] = useState(item.location);
  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleCancelEditing = () => {
    setIsEditing(false);
    setEditedLocation(item.location);
  };

  const handleConfirmEditing = async () => {
    try {
      // Отправляем запрос на сервер
      const response = await fetch("https://example.com/api/updateLocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: item.id, location: editedLocation }),
      });

      if (!response.ok) {
        console.error(`Failed to update location. Status: ${response.status}`);
        // Дополнительная обработка ошибок, если необходимо
        return;
      }

      console.log("Location updated successfully");
      setIsEditing(false); // Завершаем редактирование после успешного обновления
    } catch (error) {
      console.error("Error during location update:", error);
      // Дополнительная обработка ошибок, если необходимо
    }
  };
  const handleDeleteItem = async () => {
    try {
      // Отправляем запрос на сервер для удаления элемента
      const response = await fetch(
        `https://example.com/api/deleteItem/${item.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.error(`Failed to delete item. Status: ${response.status}`);
        // Дополнительная обработка ошибок, если необходимо
        return;
      }

      console.log("Item deleted successfully");
      // Здесь вы можете обновить интерфейс или выполнить другие действия после успешного удаления элемента
    } catch (error) {
      console.error("Error during item deletion:", error);
      // Дополнительная обработка ошибок, если необходимо
    }
  };

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.title}>{item.name}</h4>
      <img src={item.photoUrl} alt={item.name}></img>
      <p>Категория: {item.category}</p>
      <p>Дата получения: {item.acceptedDate}</p>
      <p>
        Местоположение:
        {isEditing ? (
          <select
            value={editedLocation}
            onChange={(e) => setEditedLocation(e.target.value)}
          >
            {predefinedAddresses.map((address, index) => (
              <option key={index} value={address}>
                {address}
              </option>
            ))}
          </select>
        ) : (
          <p>{editedLocation}</p>
        )}
        {isEditing ? (
          <>
            <button onClick={handleConfirmEditing} className={styles.button}>Подтвердить</button>
            <button onClick={handleCancelEditing} className={styles.button_gray}>Отмена</button>
          </>
        ) : (
          <button onClick={handleStartEditing} className={styles.button}>Изменить</button>
        )}
      </p>
      <p>Количество: {item.numbers}</p>
      <div className={styles.buttonContainer}>
        <button onClick={handleDeleteItem} className={styles.button_red}>Удалить</button>
      </div>
    </div>
  );
}

function CardInfo({ item }) {
  const handleAcceptItem = async () => {
    try {
      // Отправляем запрос на сервер для подтверждения принятия элемента
      const response = await fetch("https://example.com/api/acceptItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: item.id }),
      });

      if (!response.ok) {
        console.error(`Failed to accept item. Status: ${response.status}`);
        // Дополнительная обработка ошибок, если необходимо
        return;
      }

      console.log("Item accepted successfully");
      // Здесь вы може~е обновить интерфейс или выполнить другие действия после успешного подтверждения принятия элемента
    } catch (error) {
      console.error("Error during item acceptance:", error);
      // Дополнительная обработка ошибок, если необходимо
    }
  };

  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.title}>{item.name}</h4>
      <img src={item.photoUrl}></img>
      <p>Категория: {item.category}</p>
      <p>Дата отправки: {item.sentDate}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleAcceptItem}>Принять</button>
      </div>
    </div>
  );
}
