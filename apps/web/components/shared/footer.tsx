export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-10 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Connect</h4>
          <ul>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}