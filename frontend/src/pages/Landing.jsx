import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Landing() {
  const location = useLocation();
  const name = location.state?.name || "Student";
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // 🧭 200+ career-related prompts
  const prompts = [
    // 🔹 General career guidance
    "Best career options after Class 10",
    "How to choose a stream",
    "What is Science stream",
    "What is Commerce stream",
    "What is Arts stream",
    "Career in engineering",
    "Career in medicine",
    "Career in law",
    "Career in management",
    "Career in civil services",
    "Career in architecture",
    "Career in pharmacy",
    "Career in psychology",
    "Career in journalism",
    "Career in design",
    "Career in teaching",
    "Career in government jobs",
    "Career in MBA",
    "Career in CA",
    "Career in accounting",
    "Career in entrepreneurship",
    "Career in business administration",
    "Career in data entry",
    "Career in marketing",
    "Career in finance",
    "Career in banking",
    "Career in stock market",
    "Career in HR",
    "Career in logistics",
    "Career in public administration",
    "Career in supply chain management",
    "Career in project management",
    "Career in insurance",
    "Career in real estate",
    "Career in auditing",
    "Career in economics",
    "Career in actuarial science",

    // 🔹 Science & Technology
    "Career in computer science",
    "Career in AI",
    "Career in machine learning",
    "Career in robotics",
    "Career in cyber security",
    "Career in web development",
    "Career in app development",
    "Career in software testing",
    "Career in IT support",
    "Career in UI UX design",
    "Career in animation",
    "Career in game development",
    "Career in game design",
    "Career in blockchain",
    "Career in cloud computing",
    "Career in data science",
    "Career in artificial intelligence",
    "Career in deep learning",
    "Career in quantum computing",
    "Career in nanotechnology",
    "Career in space science",
    "Career in astronomy",
    "Career in astrophysics",
    "Career in aerospace engineering",
    "Career in mechanical engineering",
    "Career in civil engineering",
    "Career in electrical engineering",
    "Career in biomedical engineering",
    "Career in environmental engineering",
    "Career in marine engineering",
    "Career in renewable energy",
    "Career in chemical engineering",
    "Career in structural engineering",
    "Career in electronics and communication engineering",
    "Career in IoT development",
    "Career in VLSI design",
    "Career in mechatronics",
    "Career in drone technology",
    "Career in 3D printing",
    "Career in CAD design",
    "Career in biotechnology",
    "Career in microbiology",
    "Career in biochemistry",
    "Career in genetics",
    "Career in laboratory science",
    "Career in clinical research",
    "Career in food technology",
    "Career in agriculture technology",
    "Career in oceanography",
    "Career in meteorology",
    "Career in environmental science",
    "Career in forensic science",
    "Career in space research",
    "Career in biomedical research",
    "Career in nanoscience",
    "Career in virology",
    "Career in physics research",
    "Career in chemistry research",

    // 🔹 Medicine & Healthcare
    "Career in nursing",
    "Career in physiotherapy",
    "Career in dietitian",
    "Career in nutrition",
    "Career in occupational therapy",
    "Career in speech therapy",
    "Career in radiology",
    "Career in pathology",
    "Career in dentistry",
    "Career in optometry",
    "Career in veterinary science",
    "Career in Ayurveda",
    "Career in homeopathy",
    "Career in medical laboratory technology",
    "Career in pharmaceutical research",
    "Career in hospital management",
    "Career in mental health counseling",
    "Career in neuroscience",
    "Career in genetics research",
    "Career in microbiology research",

    // 🔹 Arts, Media & Humanities
    "Career in fashion designing",
    "Career in interior designing",
    "Career in photography",
    "Career in filmmaking",
    "Career in cinematography",
    "Career in editing",
    "Career in theatre",
    "Career in acting",
    "Career in dance",
    "Career in music",
    "Career in singing",
    "Career in writing",
    "Career in creative writing",
    "Career in poetry",
    "Career in script writing",
    "Career in graphic designing",
    "Career in illustration",
    "Career in animation film",
    "Career in fine arts",
    "Career in calligraphy",
    "Career in sculpture",
    "Career in journalism and media",
    "Career in content writing",
    "Career in digital marketing",
    "Career in social media management",
    "Career in influencer marketing",
    "Career in advertising",
    "Career in PR",
    "Career in event management",
    "Career in tourism",
    "Career in hospitality",
    "Career in hotel management",
    "Career in travel blogging",
    "Career in cultural studies",
    "Career in anthropology",
    "Career in sociology",
    "Career in history",
    "Career in political science",
    "Career in geography",
    "Career in linguistics",
    "Career in philosophy",
    "Career in literature",
    "Career in law and judiciary",

    // 🔹 Defence & Government
    "Career in defence",
    "Career in army",
    "Career in navy",
    "Career in air force",
    "Career in police",
    "Career in law enforcement",
    "Career in intelligence agencies",
    "Career in paramilitary forces",
    "Career in civil services",
    "Career in public sector",
    "Career in foreign services",
    "Career in public policy",
    "Career in political leadership",

    // 🔹 Vocational & Skill-based
    "Career in electrician",
    "Career in plumber",
    "Career in carpenter",
    "Career in mechanic",
    "Career in automotive technician",
    "Career in chef",
    "Career in baking",
    "Career in fashion styling",
    "Career in tailoring",
    "Career in beauty and wellness",
    "Career in hairstyling",
    "Career in cosmetology",
    "Career in makeup artistry",
    "Career in personal fitness training",
    "Career in yoga instruction",
    "Career in sports coaching",
    "Career in athletic training",
    "Career in gym management",

    // 🔹 Emerging Careers
    "Career in e-commerce",
    "Career in UX research",
    "Career in blockchain analysis",
    "Career in cryptocurrency",
    "Career in fintech",
    "Career in esports",
    "Career in content creation",
    "Career in YouTube",
    "Career in podcasting",
    "Career in sustainability",
    "Career in climate science",
    "Career in wildlife photography",
    "Career in NGO work",
    "Career in disaster management",
    "Career in urban planning",
    "Career in transport planning",
    "Career in renewable energy engineering",
    "Career in smart city development",
    "Career in AI ethics",
    "Career in space exploration",
  ];

  // 🔹 When a prompt is clicked
  const handlePromptClick = async (prompt) => {
    setChatOpen(true);
    const userMsg = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post("http://localhost:5000/api/chatbot/ask", {
        question: prompt,
      });
      const botMsg = { sender: "bot", text: res.data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg = {
        sender: "bot",
        text: "⚠️ Sorry, there was a problem connecting to the server.",
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Welcome, {name}
      </h1>
      <p className="mb-4 text-gray-700">
        Click a topic below to explore career options:
      </p>

      {/* 🔹 Prompt Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[70vh] overflow-y-auto bg-white p-4 rounded-lg shadow-md">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => handlePromptClick(prompt)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-lg text-left transition"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* 🔹 Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
          <div className="p-4 font-semibold text-white bg-blue-600 rounded-t-2xl">
            Hi {name}, I'm your Career Bot 👩‍💼
          </div>

          <div className="p-3 flex-1 overflow-y-auto h-64 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-200 text-right"
                      : "bg-gray-200 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center p-2 border-t bg-white">
            <button
              onClick={() => setChatOpen(false)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔹 Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}

