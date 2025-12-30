
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMedicalAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `你是彰化基督教醫院（彰基）腹膜透析室的專業 AI 衛教助手。
          你的任務是根據 2022 年 ISPD（國際腹膜透析學會）指南提供腹膜炎相關的專業建議。
          1. 語言請使用繁體中文，語氣需溫和、專業且具備同理心。
          2. 若病友提到「透析液混濁」、「腹痛」、「發燒」，請務必強烈建議他們「立即連繫彰基腹膜透析室」或「前往急診處」。
          3. 避免提供具體的抗生素藥名與劑量，強調治療必須由醫師診斷後決定。
          4. 解釋複雜醫學術語時要生活化。
          5. 任何回答結尾都要加上：『以上資訊僅供參考，若有身體不適請立即聯繫護理人員。』`,
      },
    });

    return response.text || "抱歉，目前無法連接到 AI 助手。請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系統發生錯誤，請直接連繫腹膜透析室專線。";
  }
};
