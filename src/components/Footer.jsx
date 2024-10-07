import footerLogo from "../assets/images/footer-logo.svg";
import facebookLogo from "../assets/icons/facebook.svg";
import twitterLogo from "../assets/icons/twitter.svg";
import instagramLogo from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black px-6 sm:px-8 md:px-11 pt-20 pb-12 grid">
      <div className="px-8 sm:px-10 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-24 gap-8 justify-items-center justify-center">
        <div className="col-span-full md:col-span-1 mb-6">
          <img
            src={footerLogo}
            alt="Nike Logo"
            role="img"
            className="h-8 mb-6"
          />

          <p className="text-gray-300 text-base">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in-store. Get rewards!
          </p>

          <div className="flex gap-4 mt-5">
            <img
              src={facebookLogo}
              alt="Facebook Logo"
              className="bg-white p-2 rounded-full"
              role="img"
            />
            <img
              src={twitterLogo}
              alt="Twitter Logo"
              className="bg-white p-2 rounded-full"
              role="img"
            />
            <img
              src={instagramLogo}
              alt="Instagram Logo"
              className="bg-white p-2 rounded-full"
              role="img"
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-6 text-white">Products</h3>
          <ul className="text-base flex flex-col gap-3 text-gray-300">
            {[
              "Air Force 1",
              "Air Max 1",
              "Air Jordan 1",
              "Air Force 2",
              "Nike Waffle Racer",
              "Nike Cortez",
            ].map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-6 text-white">Help</h3>
          <ul className="text-base flex flex-col gap-3 text-gray-300">
            {[
              "About us",
              "FAQs",
              "How it works",
              "Privacy policy",
              "Payment policy",
            ].map((helpItem, index) => (
              <li key={index}>{helpItem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-6 text-white">Get in touch</h3>
          <ul className="text-base flex flex-col gap-3 text-gray-300">
            <li>
              <a href="mailto:customer@nike.com">customer@nike.com</a>
            </li>
            <li>
              <a href="tel:+92554862354">+92554862354</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Nike. All rights reserved.
        </p>
        <p className="text-gray-300">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
