const CallToAction = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">Get Started Today</h2>
      <p className="text-lg mt-2">
        Apply now or schedule a visit to explore our campus!
      </p>
      <div className="mt-5 flex justify-center gap-4">
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 text-white rounded-lg transition duration-300">
          Apply Now
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white rounded-lg transition duration-300">
          Schedule a Visit
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
