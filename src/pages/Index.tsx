
import { useState } from "react";
import { translations } from "../config/translations";
import { LanguageSelector } from "../components/LanguageSelector";

const Index = () => {
  const [language, setLanguage] = useState("ko");
  const t = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <LanguageSelector
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
      
      <main className="container mx-auto px-4 py-20 text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 mb-4 transition-all">
            {t.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-purple-700 mb-8">
            {t.subtitle}
          </h2>
          
          <p className="text-lg text-gray-700 mb-12">
            {t.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            {Object.entries(t.features).map(([key, value]) => (
              <div
                key={key}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {value}
                </h3>
              </div>
            ))}
          </div>

          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
            {t.cta}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;
