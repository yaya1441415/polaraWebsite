import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div className="sm:col-span-2">
            <div className="mb-4">
              <Logo iconSize={22} wordmarkSize="md" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              AI automation for med spas and aesthetic clinics. We automate your entire patient
              journey — from the first message to the fifth rebooking.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#1E2A4A] uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {['How It Works', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-[#1E2A4A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© 2026 netsolution.ai. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Built for med spas,{' '}
            <span className="text-gray-500 font-medium">not enterprise</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
