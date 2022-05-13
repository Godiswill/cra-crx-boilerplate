import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ul>
          <li><a href="/popup.html">popup</a></li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
      </ul>
  </React.StrictMode>
);
