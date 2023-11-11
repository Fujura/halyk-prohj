import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            console.log(data)
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '50%', height: '70%'}}
      />
      <p>{data}</p>
    </div>
  );
};
export default QrReader;