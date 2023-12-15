import React from 'react';
import ReactDOM from 'react-dom/client';

const title = (
  <h1 className='head' tabIndex='5'>
    Namaste-react using jsx
  </h1>
);

const HeadingComponent = () => (
  <div id='container'>
    {title}
    <h2>{console.log('this is console')}</h2>
    <h1>Namaste-react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
