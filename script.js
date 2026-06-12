import React, { useState, useCallback } from "react";

export default function Reflorestamento() {
  const [arvores, setArvores] = useState([]);

  const qualidadeAr = Math.min(100, 50 + arvores.length * 2);

  const plantaArvore = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (y > 250) {
      setArvores((prev) => [...prev, { x, y }]);
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-sky-300 to-green-200 p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-2">Reflorestamento</h1>

      <div
        onClick={plantaArvore}
        className="relative w-[800px] h-[500px] bg-green-100 border-4 border-green-700 rounded-xl overflow-hidden cursor-crosshair"
      >
        {/* Céu */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-200" />

        {/* Chão */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-green-500 to-green-700" />

        {/* Árvores */}
        {arvores.map((arvore, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: arvore.x - 20, top: arvore.y - 60 }}
          >
            {/* Tronco */}
            <div className="w-4 h-16 bg-amber-800 mx-auto rounded-sm" />
            {/* Copa */}
            <div className="w-10 h-10 bg-green-700 rounded-full mx-auto -mt-12 shadow-md" />
            <div className="w-8 h-8 bg-green-600 rounded-full mx-auto -mt-6 ml-3" />
            <div className="w-8 h-8 bg-green-600 rounded-full mx-auto -mt-3 -ml-2" />
          </div>
        ))}

        {/* Painel */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow">
          <p className="text-lg font-semibold text-gray-800">
            🌳 Árvores: {arvores.length}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            💨 Qualidade do ar: {qualidadeAr}%
          </p>
        </div>

        {arvores.length === 0 && (
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-lg font-medium">
            🌱 Clique no chão para plantar árvores!
          </p>
        )}
      </div>

      <button
        onClick={() => setArvores([])}
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Limpar tudo
      </button>
    </div>
  );
}
