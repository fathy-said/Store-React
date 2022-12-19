import React from 'react';
import './LoadingBox.css'
let LoadingBox = () => {
  return (
    <>
      <div className="loading-box">
        <div className='container'>
          <div className='loader'>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--dot'></div>
            <div className='loader--text'></div>
          </div>
        </div>


      </div>

    </>
  );
}

export default LoadingBox;
