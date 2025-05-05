export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-16 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
        About Wolv Invest
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl">
        At Wolv Invest, we are committed to empowering individuals and businesses with innovative financial solutions. 
        Our mission is to provide tailored investment plans, flexible loans, and an intuitive platform to help you achieve 
        your financial goals.
      </p>
      <div className="mt-8">
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}