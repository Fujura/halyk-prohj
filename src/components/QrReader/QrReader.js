import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Card from "../Card/Card";

const QRCodeScanner = (props) => {
  const [data, setData] = useState("No result");
  const [item, setItem] = useState(null);
  function getItem(id) {
    fetch(`https://78e26ed572ce4205b41ff5bb1006ba42.api.mockbin.io/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Обработка данных после успешного получения
        console.log(data);
        setItem(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Fetch error:", error);
      });
  }

  return (
    <div>
      {item ? (
        <Card item={item} />
      ) : (
        <div>
          <QrReader
            constraints={{
              facingMode: { exact: "environment" }, // "environment" обычно обозначает главную камеру
            }}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
                getItem(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};
export default QRCodeScanner;
