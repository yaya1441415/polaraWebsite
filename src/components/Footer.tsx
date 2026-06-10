import ShowedlyLogo from './ShowedlyLogo'

const links = {
  Product: ['Features', 'How It Works', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security'],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-3">
              <ShowedlyLogo iconSize={24} wordmarkSize="md" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-5">
              The operations platform for cleaning companies with 5–100 employees. GPS check-ins, scheduling, and more.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© 2025 Showedly. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Built for cleaning businesses,{' '}
            <span className="text-gray-500 font-medium">not enterprise</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
