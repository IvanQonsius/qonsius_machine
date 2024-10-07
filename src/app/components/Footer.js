import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 w-full flex-shrink-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Column 1: Legal */}
        <div className="flex-1">
          <h3 className="font-bold text-md mb-2">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/static/legal?tab=terms" className="text-sm hover:text-gray-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/static/legal?tab=privacy" className="text-sm hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/static/legal?tab=cookies" className="text-sm hover:text-gray-400">
                Cookies Policy
              </Link>
            </li>
          </ul>

          {/* Copyright Section */}
          <div className="mt-4">
            <p className="text-sm">&copy; 2024 Qonsius. All rights reserved.</p>
          </div>
        </div>

        {/* Column 2: Social Media */}
        <div className="flex-1">
          <h3 className="font-bold text-md mb-2">Social Media</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://linkedin.com/company/qonsius"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/qonsius"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="flex-1">
          <h3 className="font-bold text-md mb-2">Contact</h3>
          {/* Address above email */}
          <p className="text-sm">
            Dublin 1, Las Rozas 28232, Madrid, Spain
          </p>
          <p className="text-sm mt-3">
            <a href="mailto:hello@qonsius.com" className="hover:text-gray-400">
              hello@qonsius.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}










