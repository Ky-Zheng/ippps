import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/">
            <div className="flex items-center">
              {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
              <span className="ml-2 text-5xl font-sans font-bold text-gray-800 my-5">
              Impressionism Painting Prediction
              </span>
            </div>
          </Link>
          {/* <ul className="flex items-center">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-900">Home</a>
            </Link>
          </li>
        </ul> */}
        </div>
      </nav>
    </header>
  );
};
