import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRCodeScanner = (props) => {
  const [data, setData] = useState("No result");
  function getItem(id) {
    fetch(`https://example.com/api/data/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Обработка данных после успешного получения
        console.log(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error("Fetch error:", error);
      });
  }

  return (
    <div>
      <QrReader
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
  );
};
export default QRCodeScanner;
