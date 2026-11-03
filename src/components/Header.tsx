import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CircleUserRound,
  Menu,
} from "lucide-react";

const services = ["Service 1", "Service 2", "Service 3"];

function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenus = () => {
    setIsServiceOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm bg-gray-100 w-full p-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <Link to="/" onClick={closeMenus}>
            <img src="/logo.png" alt="table logo" className="w-10" />
          </Link>

          <div className="flex items-center gap-4 text-sm">
            <div className="hidden md:block">
              <nav className="flex items-center gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Link to="/services" className="flex items-center gap-1">
                      Services
                    </Link>
                    {isServiceOpen ? (
                      <ChevronUpIcon
                        className="w-4 transition duration-300 cursor-pointer"
                        onClick={() => setIsServiceOpen(false)}
                      />
                    ) : (
                      <ChevronDownIcon
                        className="w-4 transition duration-300 cursor-pointer"
                        onClick={() => setIsServiceOpen(true)}
                      />
                    )}
                  </div>
                  {isServiceOpen && (
                    <div className="absolute top-10 bg-gray-200 p-2 rounded shadow-sm">
                      {services.map((service) => (
                        <Link
                          key={service}
                          onClick={closeMenus}
                          to={`/services/${service.toLowerCase().replaceAll(" ", "")}`}
                          className="block last:border-0 border-b border-gray-400 p-1 whitespace-nowrap"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>

            <div className="md:hidden">
              <nav>
                <button
                  type="button"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu aria-hidden="true" />
                </button>
                {isMobileMenuOpen && (
                  <div className="absolute bg-gray-200 p-2 left-0 top-14 w-full flex flex-col gap-2">
                    <Link
                      to="/"
                      onClick={closeMenus}
                      className="text-md border-b border-gray-400 p-2"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeMenus}
                      className="text-md border-b border-gray-400 p-2"
                    >
                      About
                    </Link>
                    <div className="text-md border-b border-gray-400 p-2">
                      <div className="flex items-center justify-between">
                        <Link
                          to="/services"
                          onClick={closeMenus}
                          className="flex-1"
                        >
                          Services
                        </Link>
                        <button
                          type="button"
                          aria-label={
                            isServiceOpen
                              ? "Close services submenu"
                              : "Open services submenu"
                          }
                          aria-expanded={isServiceOpen}
                          onClick={() => setIsServiceOpen(!isServiceOpen)}
                        >
                          {isServiceOpen ? (
                            <ChevronUpIcon className="w-4" aria-hidden="true" />
                          ) : (
                            <ChevronDownIcon
                              className="w-4"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                      {isServiceOpen && (
                        <div className="flex flex-col bg-gray-100 p-2 rounded">
                          {services.map((service) => (
                            <Link
                              key={service}
                              onClick={closeMenus}
                              to={`services/${service.toLowerCase().replaceAll(" ", "")}`}
                              className="p-2 text-md border-b border-gray-400 last:border-0"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <Link
                      to="/products"
                      onClick={closeMenus}
                      className="text-md border-b border-gray-400 p-2"
                    >
                      Products
                    </Link>
                    <Link
                      to="/contact"
                      onClick={closeMenus}
                      className="text-md p-2"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </nav>
            </div>

            <Link to="/login">
              <CircleUserRound className="w-14 text-blue-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
