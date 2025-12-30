
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onSectionChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden bg-[#00422f] text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="font-black text-xl tracking-wide">彰基 PD 防治網</div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-white/20 p-2 rounded-lg"
          aria-label="選單"
        >
          <span className="text-3xl font-bold">{isSidebarOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      {/* Sidebar - 使用 flex-col 確保底部資訊不遮擋選單 */}
      <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:static inset-y-0 left-0 w-72 bg-[#00422f] text-white transition-transform duration-300 z-40 shadow-2xl flex flex-col
      `}>
        <div className="p-8 hidden md:block shrink-0">
          <h1 className="text-3xl font-black border-b-2 border-green-500 pb-3">彰基 CCH</h1>
          <p className="text-lg text-green-300 mt-3 font-bold">腹膜透析室衛教</p>
        </div>

        <nav className="mt-4 px-4 space-y-4 overflow-y-auto flex-1 pb-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl transition-all ${activeSection === item.id
                  ? 'bg-green-500 text-white shadow-lg scale-105'
                  : 'hover:bg-green-700 text-green-100'
                }`}
            >
              <span className="text-3xl" aria-hidden="true">{item.icon}</span>
              <span className="font-bold text-xl">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* 底部聯絡資訊 - 不再使用 absolute */}
        <div className="p-8 text-base bg-[#003828] text-green-300 font-bold leading-relaxed shrink-0">
          依據 ISPD 最新指南製作<br />
          (04) 7238595<br />
          分機 7880 / 7881<br />
          或撥打值班手機
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white min-h-screen p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
