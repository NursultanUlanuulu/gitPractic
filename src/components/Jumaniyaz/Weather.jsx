import React from 'react';
import './Weather.scss';

export function Weather() {
  return (
    <div className="card">
      <h2 className="city">Бишкек</h2>
      <p className="temp">Температура: 25°C</p>
      <p className="desc">Аба ырайы: Күн ачык ☀️</p>
      <button className="change-btn" onClick={() => alert('Жаңы аба ырайы келе жатат!')}>
        Аба ырайын өзгөртүү
      </button>
    </div>
  );
}

