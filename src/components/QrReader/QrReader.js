import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = (props) => {
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
      
      />
      <p>{data}</p>

    </div>
  );
};
export default QRCodeScanner;

// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';


// const QRCodeScanner = () => {
//   const [result, setResult] = useState('No result');

//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   }

//   const handleError = (err) => {
//     console.error(err);
//   }

//   return (
//     <div>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//       />
//       <p>{result}</p>
//     </div>
//   );
// }

// export default QRCodeScanner;
