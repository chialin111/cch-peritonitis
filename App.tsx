
import React, { useState } from 'react';
import { SectionId } from './types';
import { RISK_FACTORS, PREVENTION_RULES } from './constants';
import { Layout } from './components/Layout';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);


  const renderSection = () => {
    switch (activeSection) {
      case SectionId.Home:
        return (
          <div className="space-y-8 md:space-y-12 animate-fadeIn">
            <section className="bg-slate-900 rounded-[40px] p-6 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">守護腹膜健康<br />告別腹膜炎</h2>
                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
                  彰基 PD 團隊陪伴您。我們採用 ISPD 最新醫學實證指南，幫助您居家照護更安心。
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <button onClick={() => setActiveSection(SectionId.Diagnosis)} className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl text-xl md:text-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95">
                    居家急救診斷 🩺
                  </button>
                  <button onClick={() => setActiveSection(SectionId.Prevention)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 md:px-10 md:py-5 rounded-2xl text-xl md:text-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95">
                    預防技巧教學 🛡️
                  </button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-[32px] border-2 border-blue-200 shadow-sm">
                <h3 className="font-black text-blue-900 text-3xl mb-4">掌握關鍵</h3>
                <p className="text-blue-800 text-xl leading-relaxed font-medium">90% 的感染來自接觸污染。維持雙手徹底清潔是保護腹膜的第一步。</p>
              </div>
              <div className="bg-yellow-50 p-8 rounded-[32px] border-2 border-yellow-200 shadow-sm">
                <h3 className="font-black text-yellow-900 text-3xl mb-4">及早治療</h3>
                <p className="text-yellow-800 text-xl leading-relaxed font-medium">透析液混濁是警訊！早一個小時聯繫護理室，就能多一分復原機會。</p>
              </div>
            </div>
          </div>
        );

      case SectionId.Pathogenesis:
        return (
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 border-l-8 border-indigo-600 pl-6 mb-10">
              腹膜炎是怎麼發生的？
            </h2>
            <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-xl border border-slate-200 space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: '🧫', title: '病原菌', desc: '金黃色葡萄球菌最常見' },
                  { icon: '👐', title: '接觸感染', desc: '換液時手部不潔' },
                  { icon: '🏢', title: '入腹腔', desc: '細菌在溫暖液中生長' },
                  { icon: '🔥', title: '產生發炎', desc: '白血球升高、腹痛' }
                ].map((step, i) => (
                  <div key={i} className="text-center p-6 bg-slate-50 rounded-3xl">
                    <div className="text-6xl mb-6">{step.icon}</div>
                    <h4 className="font-black text-2xl mb-3">{step.title}</h4>
                    <p className="text-slate-600 text-lg font-medium">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-900 text-white p-10 rounded-[32px] shadow-lg">
                <h4 className="font-black text-2xl mb-6">重點須知：</h4>
                <ul className="space-y-6 text-xl">
                  <li className="flex gap-4 items-start">
                    <span className="text-indigo-400">●</span>
                    <span className="leading-relaxed"><strong>便秘風險：</strong> 長期便秘會讓腸道細菌直接「鑽」進腹腔，請務必維持排便通暢。</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-indigo-400">●</span>
                    <span className="leading-relaxed"><strong>出口護理：</strong> 管路出口紅腫、流膿可能是細菌入侵的起點。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case SectionId.HighRisk:
        const chartData = RISK_FACTORS.map(rf => ({
          name: rf.factor,
          score: rf.level === 'High' ? 10 : (rf.level === 'Medium' ? 6 : 3),
          levelText: rf.level === 'High' ? '極高' : (rf.level === 'Medium' ? '中高' : '一般'),
          color: rf.level === 'High' ? '#b91c1c' : '#b45309'
        }));

        return (
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 border-l-8 border-orange-500 pl-6">
              誰是高風險族群？
            </h2>
            <div className="grid grid-cols-1 gap-10">
              <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-slate-100 overflow-x-auto">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <h3 className="font-black text-3xl text-slate-900">風險視覺化分析</h3>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2"><span className="w-6 h-6 bg-red-700 rounded-lg"></span><span className="text-xl font-bold">極高風險</span></div>
                    <div className="flex items-center gap-2"><span className="w-6 h-6 bg-amber-600 rounded-lg"></span><span className="text-xl font-bold">中高風險</span></div>
                  </div>
                </div>

                <div className="h-[600px] w-full min-w-[600px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      layout="vertical"
                      margin={{ left: 40, right: 100, top: 20, bottom: 20 }}
                      barSize={60}
                    >
                      <CartesianGrid strokeDasharray="5 5" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" domain={[0, 11]} hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        width={220}
                        tick={{ fontSize: 22, fontWeight: 900, fill: '#1e293b' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: '#f8fafc' }}
                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '20px', fontWeight: 'bold' }}
                      />
                      <Bar dataKey="score" radius={[0, 30, 30, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                        <LabelList
                          dataKey="levelText"
                          position="right"
                          offset={20}
                          style={{ fontSize: '24px', fontWeight: '900', fill: '#1e293b' }}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RISK_FACTORS.map((rf, i) => (
                  <div key={i} className={`p-10 rounded-[35px] border-4 transition-all hover:shadow-2xl hover:-translate-y-2 ${rf.level === 'High' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'}`}>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                      <h4 className="font-black text-3xl text-slate-900">{rf.factor}</h4>
                      <div className={`px-6 py-2 rounded-2xl text-xl font-black whitespace-nowrap shadow-md ${rf.level === 'High' ? 'bg-red-700 text-white' : 'bg-amber-600 text-white'}`}>
                        {rf.level === 'High' ? '警示！極高' : '中高風險'}
                      </div>
                    </div>
                    <p className="text-2xl text-slate-700 font-bold leading-relaxed">{rf.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case SectionId.Diagnosis:
        return (
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 border-l-8 border-red-600 pl-6">
              如何在家自己診斷？
            </h2>
            <div className="bg-red-700 text-white p-10 md:p-14 rounded-[40px] shadow-2xl space-y-10">
              <h3 className="text-3xl md:text-4xl font-black text-center mb-4 underline decoration-red-400">
                🚨 腹膜炎「黃金判斷」
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white text-slate-900 p-10 rounded-[32px] shadow-inner flex flex-col items-center text-center">
                  <div className="text-8xl mb-6">🥛</div>
                  <h4 className="font-black text-3xl mb-4">透析液混濁</h4>
                  <p className="text-xl leading-relaxed font-bold text-slate-700">
                    最簡單的方法：<br />
                    <span className="text-red-600">將引流袋放在報紙或手機上</span><br />
                    若看不清文字，請立即就醫！
                  </p>
                </div>
                <div className="bg-white text-slate-900 p-10 rounded-[32px] shadow-inner flex flex-col items-center text-center">
                  <div className="text-8xl mb-6">🥵</div>
                  <h4 className="font-black text-3xl mb-4">持續性腹痛</h4>
                  <p className="text-xl leading-relaxed font-bold text-slate-700">
                    感覺腹部像火在燒、按壓後彈開更痛，或是體溫超過 37.5 度且畏寒。
                  </p>
                </div>
              </div>
              <div className="bg-red-900/50 p-8 rounded-2xl border-2 border-red-400 text-center">
                <p className="text-2xl font-black">
                  ※ 只要符合以上其中一種情況，請視為「疑似感染」處理！
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-xl border-4 border-slate-100">
              <h3 className="font-black text-3xl mb-8">緊急行動流程</h3>
              <div className="space-y-8">
                {[
                  { num: '1', title: '不可丟棄', desc: '將那袋「混濁的引流袋」整袋留著，帶回醫院檢驗。' },
                  { num: '2', title: '立刻打電話', desc: '撥打 (04) 7238595 分機 7880 / 7881 或聯絡值班手機。' },
                  { num: '3', title: '帶回常備藥', desc: '將您平日使用的藥物清單與透析紀錄一併帶回醫院。' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 p-6 bg-slate-50 rounded-[32px]">
                    <div className="bg-red-600 text-white w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-3xl font-black">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-black text-2xl mb-2">{item.title}</h4>
                      <p className="text-xl text-slate-700 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case SectionId.Prevention:
        return (
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 border-l-8 border-green-600 pl-6">
              如何有效預防？
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                {PREVENTION_RULES.map((rule, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[32px] shadow-lg border-2 border-slate-100 hover:border-green-400 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-black text-2xl text-green-900">{rule.title}</h4>
                      <span className="text-sm px-4 py-1 bg-green-100 text-green-800 rounded-full font-bold">{rule.category === 'Hygiene' ? '清潔衛生' : (rule.category === 'Environment' ? '環境管理' : '健康管理')}</span>
                    </div>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">{rule.content}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 p-12 rounded-[40px] border-2 border-green-200 flex flex-col items-center justify-center text-center space-y-8 shadow-inner">
                <div className="text-9xl">🧴</div>
                <h3 className="font-black text-4xl text-green-900">核心精神：<br />無菌觀念</h3>
                <p className="text-2xl text-green-800 leading-relaxed font-bold">
                  「只要碰到不該碰的地方，<br />就假設它已經髒了。」
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-sm italic text-xl font-bold text-slate-600">
                  "寧可浪費一組管路，也不要讓細菌進入腹腔。"
                </div>
              </div>
            </div>
          </div>
        );

      case SectionId.Treatment:
        return (
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-slate-900 border-l-8 border-blue-600 pl-6">
              治療方式簡介
            </h2>
            <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-xl border border-slate-100 space-y-12">
              <div className="space-y-10">
                {[
                  { title: '1. 快速診斷', desc: '醫師會抽取引流液做細菌培養與細胞計數，找出真正的感染原因。' },
                  { title: '2. 加入抗生素', desc: '治療腹膜炎多半不是吃藥，而是將抗生素直接「加入透析液」中，讓藥物在腹腔直接工作。' },
                  { title: '3. 完成完整療程', desc: '一定要完成 2 至 3 週的療程，不可因為不痛了就隨意自行停藥，否則極易復發。' }
                ].map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">✓</div>
                    <h4 className="font-black text-2xl mb-3 text-slate-900">{step.title}</h4>
                    <p className="text-xl text-slate-700 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-orange-50 p-10 rounded-[32px] border-2 border-orange-200 shadow-sm">
                <h4 className="font-black text-2xl text-orange-900 mb-4">專業叮嚀：</h4>
                <p className="text-xl text-orange-800 font-bold leading-relaxed">
                  大約有 10-15% 的嚴重個案可能需要移除管路。及時就醫能大幅降低拔管的風險！請務必配合彰基 PD 醫療團隊的指示。
                </p>
              </div>
            </div>
          </div>
        );



      default:
        return (
          <div className="p-8 text-center text-slate-500 font-bold text-2xl">
            正在載入內容...
          </div>
        );
    }
  };

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </Layout>
  );
};

export default App;
