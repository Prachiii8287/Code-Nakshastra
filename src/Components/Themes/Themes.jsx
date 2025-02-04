import React from 'react';
import Cert from './rocket.png';

const Themes = () => {
  return (
    <div id="Themes" className="p-5 md:p-10 mb-16">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 mt-12 justify-center text-center">THEMES</h1>
      <div className="flex flex-col gap-8">
        
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="flex gap-5  bg-cyan-600 hover:scale-105 transform transition duration-300 rounded-3xl p-6 items-center shadow-lg w-80">
            <span className="text-white">
              <div className="flex items-center gap-4">
                <img className="w-24 h-22" src={Cert} alt="Win Icon" />
                <h1 className="text-xl font-bold">CYBER SECURITY</h1>
              </div>
            </span>
          </div>

          <div className="flex gap-5  bg-cyan-600 hover:scale-105 transform transition duration-300 rounded-3xl p-6 items-center shadow-lg w-80">
            <span className="text-white">
              <div className="flex items-center gap-4">
                <img className="w-24 h-22" src={Cert} alt="Win Icon" />
                <h1 className="text-xl font-bold">BLOCKCHAIN AND WEB3 </h1>
              </div>
              
            </span>
          </div>

          <div className="flex gap-5  bg-cyan-600 hover:scale-105 transform transition duration-300 rounded-3xl p-6 items-center shadow-lg w-80">
            <span className="text-white">
              <div className="flex items-center gap-4">
                <img className="w-24 h-22" src={Cert} alt="Win Icon" />
                <h1 className="text-xl font-bold">AI/ML</h1>
              </div>
              
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="flex gap-5  bg-cyan-600 hover:scale-105 transform transition duration-300 rounded-3xl p-6 items-center shadow-lg w-80">
            <span className="text-white">
              <div className="flex items-center gap-4">
                <img className="w-24 h-22" src={Cert} alt="Certificate Icon" />
                <h1 className="text-xl font-bold">OPEN INNOVATION</h1>
              </div>
              
            </span>
          </div>

        
        </div>
        
      </div>
    </div>
  );
};

export default Themes;
