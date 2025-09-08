import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="mailto:vera@omahtech.co" className="hover:underline">vera@omahtech.co</a>
        <a href="mailto:sales@omahtech.co" className="hover:underline">sales@omahtech.co</a>
        <a href="mailto:info@omahtech.co" className="hover:underline">info@omahtech.co</a>

      </div>
      <div className="flex justify-center space-x-6 mb-4">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
    <FaLinkedin />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
    <FaInstagram />
  </a>
</div>
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="/docs/Company Policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Company Policy
        </a>
      </div>
      <p className="mt-2">
        © {new Date().getFullYear()} Omah Tech Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;