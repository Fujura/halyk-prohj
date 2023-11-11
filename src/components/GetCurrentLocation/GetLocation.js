import React, { useState, useEffect } from 'react';

const GeoLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Проверяем поддержку геолокации в браузере
    if (navigator.geolocation) {
      // Запрашиваем текущее местоположение пользователя
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []); // Пустой массив зависимостей означает, что useEffect выполняется только один раз при монтировании компонента

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GeoLocation;