import React, { useState } from 'react';

const themes = {
  light: {
    bg: 'bg-white',
    text: 'text-blue-900',
    sidebar: 'bg-blue-100',
    panel: 'bg-blue-50',
    border: 'border-blue-200',
  },
  dark: {
    bg: 'bg-blue-950',
    text: 'text-blue-100',
    sidebar: 'bg-blue-900',
    panel: 'bg-blue-800',
    border: 'border-blue-700',
  },
};

export default function EditorApp() {
  const [theme, setTheme] = useState('light');
  const t = themes[theme];

  return (
    <div className={`min-h-screen flex ${t.bg} ${t.text} transition-colors`}>
      {/* Sidebar */}
      <aside className={`w-64 p-4 ${t.sidebar} ${t.border} border-r flex flex-col gap-4`}>
        <h1 className="text-2xl font-bold mb-4">Game Editor</h1>
        <button
          className="mb-2 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Cambiar tema
        </button>
        <nav className="flex flex-col gap-2">
          <button className="text-left hover:underline">Proyectos</button>
          <button className="text-left hover:underline">Assets</button>
          <button className="text-left hover:underline">Escenas</button>
          <button className="text-left hover:underline">Sprites</button>
          <button className="text-left hover:underline">Código</button>
        </nav>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 flex flex-col">
        <div className={`flex-1 flex items-center justify-center ${t.panel}`}>Lienzo del juego (aquí irá Konva.js)</div>
      </main>
      {/* Right Panel */}
      <aside className={`w-80 p-4 ${t.panel} ${t.border} border-l`}>
        <h2 className="text-xl font-semibold mb-2">Propiedades</h2>
        <div>Selecciona un elemento para ver sus propiedades.</div>
      </aside>
    </div>
  );
}