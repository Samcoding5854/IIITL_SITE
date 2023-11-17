import React, { useState, useEffect } from 'react';

function Head() {
  const [languages, setLanguages] = useState([
    'Indian Insitute of Information Technology, Lucknow',
    'भारतीय   सूचना   प्रौद्योगिकी   संस्थान, लखनऊ' ,
  ]);
  const [index, setIndex] = useState(0);

 

  return (
      <div
      className="m-4 text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-medium text-right opacity-60 text-gray-500 leading-snug justify-center items-center"
      style={{
        opacity: 1,
        animation: 'fadeIn 3s ease-in-out',
        
      }}
    >
      Indian Institute of Information Technology, Lucknow
      <br />
      भारतीय   सूचना   प्रौद्योगिकी   संस्थान, लखनऊ
      <br />
      <span className="float-right animate__zoomOutRight text-xl md:text-lg lg:text-xl xl:text-2xl text-gray-500">(An Institute of National Importance by the Act of Parliament)</span>
    </div>

  );
}

export default Head;
