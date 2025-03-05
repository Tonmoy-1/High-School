import { useState, useEffect } from "react";

const notices = [
  "📢 Admission Open for 2025 – Apply Now!",
  "⚠️ School closed on March 10th due to maintenance.",
  "🏆 Annual Sports Day is scheduled for March 25th!",
  "📅 Parent-Teacher Meeting on March 15th at 10 AM.",
  "📝 Mid-Term Exams start from April 5th – Prepare well!",
];

const Notice = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition((prev) => (prev + 1) % notices.length);
      }, 3000); // Change notice every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="bg-blue-500 text-white py-3 text-center">
      <div
        className="overflow-hidden whitespace-nowrap text-lg font-medium"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <span className="inline-block transition-transform duration-500">
          {notices[position]}
        </span>
      </div>
    </div>
  );
};

export default Notice;
