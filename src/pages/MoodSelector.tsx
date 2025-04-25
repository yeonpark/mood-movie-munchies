
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  { id: "happy", label: "행복한", emoji: "😊" },
  { id: "sad", label: "슬픈", emoji: "😢" },
  { id: "excited", label: "신난", emoji: "🎉" },
  { id: "relaxed", label: "편안한", emoji: "😌" },
  { id: "stressed", label: "스트레스 받는", emoji: "😫" }
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 text-center">
          지금 기분이 어떠신가요?
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`p-6 rounded-xl text-center transition-all ${
                selectedMood === mood.id
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-white hover:bg-purple-50 shadow"
              }`}
            >
              <div className="text-4xl mb-2">{mood.emoji}</div>
              <div className="text-lg font-medium">{mood.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
