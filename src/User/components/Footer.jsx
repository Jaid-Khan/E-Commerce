import React from 'react';

function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* ABOUT Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              {['Contact Us', 'About Us', 'Careers', 'UrbanEase Stories', 'Press', 'Corporate Information'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CONSUMER POLICY Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">CONSUMER POLICY</h3>
            <ul className="space-y-2">
              {['Cancellation & Returns', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap', 'Grievance Redressal', 'EPR Compliance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* GROUP COMPANIES Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">GROUP COMPANIES</h3>
            <ul className="space-y-2">
              {['Myntra', 'Cleartrip', 'Shopsy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mail Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Mail Us:</h3>
            <address className="text-gray-400 not-italic">
              UrbanEase Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </address>
          </div>
          
          {/* Social & Registered Office Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-white text-lg font-semibold mb-4">Social:</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'youtube', 'instagram'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={platform}
                  >
                    <i className={`fab fa-${platform} text-xl`} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Registered Office Address:</h3>
              <address className="text-gray-400 not-italic">
                UrbanEase Internet Private Limited,
                <br />
                Buildings Alyssa, Begonia &
                <br />
                Clove Embassy Tech Village,
                <br />
                Outer Ring Road, Devarabeesanahalli Village,
                <br />
                Bengaluru, 560103,
                <br />
                Karnataka, India
                <br />
                CIN : U51109KA2012PTC066107
                <br />
                Telephone: 044-45614700 / 044-67415800
              </address>
            </div>
          </div>
        </div>
        
        {/* HELP Section - visible on mobile only */}
        <div className="mt-8 md:hidden">
          <h3 className="text-white text-lg font-semibold mb-4">HELP</h3>
          <ul className="space-y-2">
            {['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 10L2 17l10 5 10-5-10-5z" />
            </svg>
            <span className="text-gray-400 text-sm">© 2025 UrbanEase</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <img 
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" 
              alt="Accepted payment methods" 
              className="h-8"
            />
          </div>
          
          <div className="mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Designed with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;