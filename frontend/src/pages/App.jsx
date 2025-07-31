import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white shadow rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Laam P2P</h1>
        <p className="text-gray-600">
          Ku beddel USDT iyo lacagta Itoobiya si fudud adigoo adeegsanaya Laam P2P. Soo gal ama iska diiwaan geli si aad u bilowdo ganacsi!
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Soo gal</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Diiwaan Galin</button>
        </div>
      </div>
    </div>
  );
}
