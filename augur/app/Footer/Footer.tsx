import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white grid grid-cols-4 gap-8 p-8">
      <div>
        <h2>Explore</h2>
        <div>
          <a href="/explore">EXPLORE</a>
        </div>
        <div>
          <a href="/blog">Blog</a>
        </div>
        <div>
          <a href="/faqs">FAQs</a>
        </div>
        <div>
          <a href="/branding-and-press-kit">Branding & Press Kit</a>
        </div>
        <div>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <a href="/augur-dao">AugurDAO</a>
        </div>
        <div>
          <a href="/migrate-your-rep">Migrate your REP</a>
        </div>
      </div>
      <div>
        <h2>Developers</h2>
        <div>
          <a href="/developers">DEVELOPERS</a>
        </div>
        <div>
          <a href="/documentation">Documentation</a>
        </div>
        <div>
          <a href="/whitepaper">Whitepaper</a>
        </div>
        <div>
          <a href="/bug-bounty">Bug Bounty</a>
        </div>
        <div>
          <a href="/augur-core-license">Augur Core License</a>
        </div>
        <div>
          <a href="/augur-ui-license">Augur UI License</a>
        </div>
      </div>
      <div>
        <h2>Follow Us</h2>
        <div>
          <a href="/discord">Discord</a>
        </div>
        <div>
          <a href="/twitter">Twitter</a>
        </div>
        <div>
          <a href="/github">GitHub</a>
        </div>
        <div>
          <a href="/reddit">Reddit</a>
        </div>
        <div>
          <a href="/facebook">Facebook</a>
        </div>
      </div>
      <div>
        <h2>Newsletters</h2>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-800 p-2 rounded"
          />
          <button className="bg-blue-500 text-white p-2 ml-2 rounded">
            Subscribe
          </button>
        </div>
        <div>
          <a href="/subscribe-to-our-newsletter-for-weekly-updates-on-all-things-augur">
            Subscribe to our newsletter for weekly updates on all things Augur
          </a>
        </div>
      </div>
      <div className="col-span-4 flex justify-between mt-4">
        <p>© 2023 PM Research LTD</p>
        <div className="space-x-4">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-notice">Cookie Notice</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
