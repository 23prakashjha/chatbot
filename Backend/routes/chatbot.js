const express = require("express");
const router = express.Router();

// === Comprehensive Career Responses (200+) ===
const careerResponses = {
  // 🔹 Core Career Guidance
  "best career options after class 10":
    "After Class 10, you can choose Science, Commerce, or Arts. Science leads to Engineering or Medicine, Commerce to CA or Management, and Arts to Humanities, Law, or Journalism.",
  "how to choose a stream":
    "Choose a stream based on your interests, strengths, and goals. Science for technical fields, Commerce for business, and Arts for creativity or civil services.",
  "what is science stream":
    "Science includes Physics, Chemistry, Biology, and Mathematics. It leads to careers in Engineering, Medicine, Research, and Technology.",
  "what is commerce stream":
    "Commerce focuses on business, finance, and economics. Ideal for CA, CS, banking, management, or entrepreneurship careers.",
  "what is arts stream":
    "Arts includes subjects like History, Political Science, Psychology, and Sociology. It’s great for civil services, law, media, and social work careers.",
  "how to decide a career path":
    "Explore your interests, take aptitude tests, talk to mentors, and research job opportunities in your preferred field.",
  "career in government jobs":
    "You can prepare for UPSC, SSC, Railways, Defence, or State PSC exams. Choose according to your qualifications and interests.",

  // 🔹 Science Stream
  "career in engineering":
    "Take PCM in Class 12, then pursue B.Tech or BE. Choose specializations like Mechanical, Computer, Civil, or Electrical.",
  "career in medicine":
    "Take PCB in Class 12, clear NEET, and pursue MBBS or BDS. You can also explore allied health sciences.",
  "career in pharmacy":
    "Pursue D.Pharm or B.Pharm after PCB. Work in drug manufacturing, research, or hospitals.",
  "career in nursing":
    "Take PCB, then B.Sc Nursing or GNM. Excellent career options in hospitals and healthcare.",
  "career in biotechnology":
    "Take PCB, then B.Tech or B.Sc in Biotechnology. Careers in pharma, research, and agriculture sectors.",
  "career in forensic science":
    "Take PCB, pursue B.Sc Forensic Science. Work with police departments or labs.",
  "career in astrophysics":
    "Take PCM, pursue B.Sc or B.Tech in Physics/Aerospace, and go for research at ISRO or NASA.",
  "career in marine biology":
    "Take PCB, then B.Sc or M.Sc in Marine Biology. Work in ocean research and conservation.",
  "career in veterinary science":
    "Take PCB, pursue BVSc, and work in animal healthcare or research.",
  "career in aerospace engineering":
    "Take PCM, pursue B.Tech in Aerospace Engineering. Jobs in ISRO, DRDO, or aviation companies.",

  // 🔹 Engineering Branches
  "career in mechanical engineering":
    "Focuses on design and manufacturing of machines. Pursue B.Tech in Mechanical Engineering.",
  "career in civil engineering":
    "Design infrastructure—roads, bridges, buildings. Requires B.Tech Civil Engineering.",
  "career in electrical engineering":
    "Work with power systems, circuits, and electronics. Pursue B.Tech Electrical.",
  "career in computer science":
    "Covers programming, AI, software, and systems. Pursue B.Tech or B.Sc CS.",
  "career in chemical engineering":
    "Study chemical processes for manufacturing. Pursue B.Tech Chemical.",
  "career in biomedical engineering":
    "Combines medicine and technology. Work in medical devices or R&D.",
  "career in environmental engineering":
    "Focuses on pollution control, waste management, and sustainability.",
  "career in robotics":
    "Blend AI, electronics, and mechanics. Study Robotics or Mechatronics.",
  "career in ai":
    "Artificial Intelligence professionals design smart systems. Study AI/ML and coding.",
  "career in cyber security":
    "Focus on network protection and ethical hacking. Get CEH or CISSP certification.",

  // 🔹 Commerce Stream
  "career in ca":
    "After Commerce, clear CA Foundation, Intermediate, and Final. Work in accounting, auditing, or taxation.",
  "career in finance":
    "Study B.Com, BBA, or MBA Finance. Work in banks, investment, or corporate finance.",
  "career in economics":
    "Pursue BA or BSc Economics. Jobs in research, finance, or government planning.",
  "career in management":
    "Pursue BBA or MBA. Work in operations, HR, or marketing.",
  "career in entrepreneurship":
    "Start your business or join startups. Business studies or MBA helps.",
  "career in marketing":
    "Focus on branding, advertising, and digital campaigns. Pursue MBA Marketing.",
  "career in hr":
    "Manage people and company culture. Pursue MBA in HR.",
  "career in logistics":
    "Handle supply chains and transport. Pursue BBA or MBA in Logistics.",
  "career in stock market":
    "Learn trading and analysis. Get NISM or CFA certifications.",
  "career in taxation":
    "Work with direct and indirect taxes. Commerce background preferred.",
  "career in business analytics":
    "Combine data and business. Pursue PGDM or MBA in Analytics.",
  "career in insurance":
    "Pursue Commerce or MBA Insurance. Work with LIC, ICICI, etc.",

  // 🔹 Arts & Humanities
  "career in law":
    "After 12th, appear for CLAT or LSAT, then pursue LLB.",
  "career in psychology":
    "Pursue BA/BSc Psychology. Become a counselor, therapist, or researcher.",
  "career in journalism":
    "Study BJMC or Mass Communication. Work in print, TV, or digital media.",
  "career in sociology":
    "Study social behavior. Work in NGOs, HR, or research.",
  "career in history":
    "Study BA History. Careers in archaeology, heritage, or teaching.",
  "career in geography":
    "Study physical and human geography. Work in GIS or planning.",
  "career in political science":
    "Study politics and governance. Great for UPSC preparation.",
  "career in philosophy":
    "Study reasoning and ethics. Work in academia or writing.",
  "career in civil services":
    "Prepare for UPSC or State PSC. Work as IAS, IPS, or IFS officer.",
  "career in international relations":
    "Study diplomacy and foreign policy. Work in embassies or NGOs.",

  // 🔹 Creative & Design
  "career in fashion designing":
    "Pursue B.Des or courses at NIFT. Careers in apparel and styling.",
  "career in interior designing":
    "Pursue B.Des or diploma. Work in residential or corporate design.",
  "career in graphic design":
    "Learn Photoshop, Illustrator, Figma. Freelance or join agencies.",
  "career in animation":
    "Study animation, VFX, or 3D design. Work in media or gaming.",
  "career in filmmaking":
    "Study film direction, editing, or cinematography. Join FTII or private schools.",
  "career in music":
    "Pursue Music or Performing Arts. Become singer, composer, or teacher.",
  "career in acting":
    "Join drama schools. Work in film, theatre, or TV.",
  "career in writing":
    "Pursue English Literature or Journalism. Become author, editor, or copywriter.",
  "career in photography":
    "Study photography or visual arts. Freelance or work with studios.",
  "career in dance":
    "Join Fine Arts academies. Work as performer or choreographer.",

  // 🔹 Modern Tech Careers
  "career in data science":
    "Learn Python, AI, and analytics. Pursue B.Tech or certification programs.",
  "career in machine learning":
    "Study ML, Python, and statistics. Work in AI companies.",
  "career in blockchain":
    "Study decentralized systems. Build applications for crypto and fintech.",
  "career in web development":
    "Learn HTML, CSS, JS, React, and Node.js. Pursue BCA or certifications.",
  "career in app development":
    "Learn Flutter, Kotlin, or React Native. Build mobile apps.",
  "career in ui ux design":
    "Focus on design thinking and usability. High demand in tech.",
  "career in cloud computing":
    "Learn AWS, Azure, or GCP. Pursue IT or CS degree.",
  "career in digital marketing":
    "Learn SEO, content, and ads. Huge demand in all industries.",
  "career in game development":
    "Learn Unity or Unreal Engine. Combine coding and creativity.",
  "career in ai ethics":
    "Work on responsible AI systems. Study ethics, tech, and policy.",

  // 🔹 Vocational / Service
  "career in hotel management":
    "Pursue BHM or diploma. Jobs in hospitality, tourism, and catering.",
  "career in tourism":
    "Pursue BBA Tourism or diploma. Work as travel planner or guide.",
  "career in aviation":
    "Become pilot, ground staff, or cabin crew. Pursue BBA Aviation.",
  "career in defence":
    "Join NDA after 12th or CDS after graduation.",
  "career in police":
    "Appear for SSC or State Police exams. Serve as SI or IPS.",
  "career in fire safety":
    "Pursue Fire and Safety Engineering. Jobs in public and private sectors.",
  "career in electrician":
    "Learn technical skills via ITI. Work in residential and industrial sectors.",
  "career in beauty and wellness":
    "Take cosmetology or beauty courses. Work in salons or as freelancer.",
  "career in chef":
    "Pursue Hotel Management or Culinary Arts. Work in restaurants or hotels.",
  "career in sports coaching":
    "Pursue BPEd or coaching certifications. Work in schools or sports clubs.",

  // 🔹 Emerging & Future Careers
  "career in fintech":
    "Blend finance and technology. Work in banking, startups, or crypto.",
  "career in esports":
    "Play competitively or manage gaming content. Growing industry.",
  "career in sustainability":
    "Work on climate, energy, and environmental solutions.",
  "career in climate science":
    "Study environment and weather. Work in NGOs or research.",
  "career in ngo":
    "Work for social impact. Pursue social work or development studies.",
  "career in urban planning":
    "Design smart cities and sustainable spaces. Pursue B.Plan or M.Plan.",
  "career in renewable energy":
    "Focus on solar, wind, and hydro technologies.",
  "career in space exploration":
    "Work in astronomy, engineering, or research for space agencies.",
  "career in ai research":
    "Advance AI technologies via MSc or PhD programs.",
  "career in quantum computing":
    "Study physics and coding. Work on next-gen computing research.",

  // 🔹 General Advice
  "how to write a resume":
    "Keep it clear, short, and relevant. Include skills, education, and achievements.",
  "how to prepare for interviews":
    "Research the company, stay confident, and practice common questions.",
  "how to find internships":
    "Use LinkedIn, Internshala, and college placement cells.",
  "what skills are in demand":
    "AI, data analysis, communication, leadership, and adaptability are key.",
  "how to improve communication":
    "Practice speaking, reading, and listening daily.",
  "how to plan higher studies":
    "Identify your career goals, research universities, and prepare applications early.",
  "how to switch careers":
    "Assess transferable skills, learn new tools, and gain certifications.",
};

// === Chatbot Route ===
router.post("/ask", (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({
      answer: "Please ask a valid career-related question.",
    });
  }

  const key = question.toLowerCase().trim();
  const answer =
    careerResponses[key] ||
    "I'm not sure about that. Try asking about a specific career, stream, or subject.";

  res.json({ answer });
});

module.exports = router;

