import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gold text-dark py-4 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© 2023 Emerald. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
