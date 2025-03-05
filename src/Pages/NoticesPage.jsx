import Notice from "../Components/Notice";

const NoticesPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center py-6">Latest Notices</h1>
      <Notice />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">All Notices</h2>
        <ul className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {[
            "📢 Admission Open for 2025 – Apply Now!",
            "⚠️ School closed on March 10th due to maintenance.",
            "🏆 Annual Sports Day is scheduled for March 25th!",
            "📅 Parent-Teacher Meeting on March 15th at 10 AM.",
            "📝 Mid-Term Exams start from April 5th – Prepare well!",
          ].map((notice, index) => (
            <li key={index} className="py-2 border-b last:border-none">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticesPage;
