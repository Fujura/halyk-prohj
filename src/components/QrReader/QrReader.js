import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
<<<<<<< HEAD
import Card from "../Card/Card";

const QRCodeScanner = (props) => {
  const [data, setData] = useState("No result");
  const [item, setItem] = useState(null);
  function getItem(id) {
    fetch(`https://78e26ed572ce4205b41ff5bb1006ba42.api.mockbin.io/`)
=======
import Card from "../bodyHTML/Card/Card";



const QRCodeScanner = (props) => {
  const [itemId, setItemId] = useState("No result");
  const [item, setItem] = useState(null);
  function getItem(id) {
    fetch(`https://example.com/api/data/${id}`)
>>>>>>> 0910e6ab7bb8d15182ccedab947f7f2d627278fa
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Обработка данных после успешного получения
        console.log(data);
<<<<<<< HEAD
        setItem(data);
      })
      .catch((error) => {
        // Обработка ошибок
=======
      })
      .catch((error) => {
>>>>>>> 0910e6ab7bb8d15182ccedab947f7f2d627278fa
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
<<<<<<< HEAD
            constraints={{
              facingMode: { exact: "environment" }, // "environment" обычно обозначает главную камеру
            }}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
=======
            
            
            onResult={(result, error) => {
              if (!!result) {
                setItemId(result?.text);
>>>>>>> 0910e6ab7bb8d15182ccedab947f7f2d627278fa
                getItem(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
<<<<<<< HEAD
          <p>{data}</p>
=======
          <p>{itemId}</p>
>>>>>>> 0910e6ab7bb8d15182ccedab947f7f2d627278fa
        </div>
      )}
    </div>
  );
};
export default QRCodeScanner;
