import Link from "next/link";

const Header = () => {
  
  return (
    <header className="bg-white fixed top-0 left-0 p-5 z-10 w-full text-center">
      <Link
        href="/"
        className={`${""} px-3 py-2 rounded-md text-base font-medium`}
        aria-current="page"
      >
        Get Registered
      </Link>
      <Link
        href="/users"
        className={`px-3 py-2 rounded-md text-base font-medium`}
        aria-current="page"
      >
        Users
      </Link>
    </header>
  );
};

export default Header;
