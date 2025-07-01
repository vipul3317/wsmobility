import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BikeModels from '../../components/EVbikes/BikeModels';
import { Menu, X } from 'lucide-react';

const EvbikePage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [
    { name: 'Models', targetId: 'models' },
    { name: 'Why Partner', targetId: 'why-partner' },
    { name: 'Success Stories', targetId: 'success-stories' },
    { name: 'Apply Now', targetId: 'apply-now' },
  ];

  const downloadBrochure = () => {
        const link = document.createElement('a');
        link.href = 'Brochure Draft 1.pdf';
        link.download = 'brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios.get('https://wsmobility-backend.onrender.com/api/bikes/getbikemodels')
      .then(res => {
        console.log("API response:", res.data);
        setBikes(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div className='min-h-screen'>
      <nav className="bg-white/95 backdrop-blur-sm shadow-md w-full fixed top-0 left-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="assets/parentCompanyLogo.jpg"
                alt="ws-mob-logo"
                style={{ width: 130, height: 80 }}
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="text-gray-700 hover:text-green-600 text-lg font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                onClick={downloadBrochure}>
                Download Brochure
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-lg">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.targetId}`}
                  onClick={(e) => handleClick(e, item.targetId)}
                  className="block text-gray-700 hover:text-green-600 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Download Brochure
              </button>
              <button className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
      <BikeModels bikes={bikes} />
    </div>
  )
}

export default EvbikePage;