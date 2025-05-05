
  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-16 bg-gray-50">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Wolv Invest
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Your trusted partner in investment and financial growth.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <main className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <Image
            src="/icons/investment.svg"
            alt="Investment Icon"
            width={64}
            height={64}
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Smart Investments
          </h2>
          <p className="text-gray-600 mt-2">
            Explore tailored investment plans to grow your wealth.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <Image
            src="/icons/loans.svg"
            alt="Loans Icon"
            width={64}
            height={64}
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Flexible Loans
          </h2>
          <p className="text-gray-600 mt-2">
            Access loans with competitive rates and flexible terms.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <Image
            src="/icons/dashboard.svg"
            alt="Dashboard Icon"
            width={64}
            height={64}
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Intuitive Dashboard
          </h2>
          <p className="text-gray-600 mt-2">
            Manage your investments and loans with ease.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t mt-16">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Wolv Invest. All rights reserved.
        </p>
      </footer>
    </div>
  );
}{/* Testimonials Section */}
<section className="w-full max-w-5xl mt-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
    What Our Clients Say
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-600 italic">
        "Wolv Invest helped me grow my portfolio by 30% in just one year. Their
        platform is intuitive and easy to use!"
      </p>
      <p className="mt-4 text-gray-800 font-semibold">- Jane Doe</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-lg">
      <p className="text-gray-600 italic">
        "The loan process was seamless and transparent. I highly recommend Wolv
        Invest for anyone looking for financial solutions."
      </p>
      <p className="mt-4 text-gray-800 font-semibold">- John Smith</p>
    </div>
  </div>
</section>

