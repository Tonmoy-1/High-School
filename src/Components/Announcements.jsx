import { useState } from "react";

const Announcements = () => {
  const [announcements] = useState([
    "📢 Admissions Open for 2025!",
    "🏆 School won the National Science Award!",
    "📅 Parent-Teacher Meeting on March 15th",
  ]);

  return (
    <section className="py-12 bg-blue-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Latest Announcements</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {announcements.map((news, index) => (
          <div
            key={index}
            className="bg-white text-blue-600 p-4 rounded-lg shadow-md"
          >
            {news}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
