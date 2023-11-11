import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import Card from "../../bodyHTML/Card/Card";



const QRCodeScanner = (props) => {
  const [itemId, setItemId] = useState("No result");
  const [item, setItem] = useState(null);
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
        console.error("Fetch error:", error);
      });
  }

  return (
    <div>
      {item ? (
        <Card item={item} type="viewInfo" />
      ) : (
        <div>
          <QrReader
            
            
            onResult={(result, error) => {
              if (!!result) {
                setItemId(result?.text);
                getItem(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
          <p>{itemId}</p>
        </div>
      )}
    </div>
  );
};
export default QRCodeScanner;
