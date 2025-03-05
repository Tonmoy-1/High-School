import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
} from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      name: "Student Portal",
      icon: <FaUserGraduate />,
      path: "/student-dashboard",
    },
    {
      name: "Teacher Portal",
      icon: <FaChalkboardTeacher />,
      path: "/teacher-dashboard",
    },
    { name: "Admin Portal", icon: <FaUserShield />, path: "/admin-dashboard" },
  ];

  return (
    <section className="py-12 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Quick Access</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="bg-white dark:bg-gray-700 dark:text-white p-6 shadow-lg rounded-lg w-60 flex flex-col items-center transition transform hover:scale-105"
            >
              <div className="text-4xl text-blue-500">{link.icon}</div>
              <p className="mt-3 text-lg font-medium">{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
