import { MdDarkMode } from 'react-icons/md';

const Header = () => {
  return (
    <header className="bg-white p-3 md:px-16 md:pl-16 shadow-md fixed w-full flex justify-between items-center z-50">
      <a
        href="/)"
        className="inline-block text-purple-800 font-bold text-2xl"
      >
        CompressWizard
      </a>

      <div>
        <button className="p-2 rounded-full">
          <MdDarkMode fontSize="24px" />
        </button>
      </div>
    </header>
  );
};

export default Header;
