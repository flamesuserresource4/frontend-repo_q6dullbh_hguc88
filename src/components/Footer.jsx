export default function Footer() {
  return (
    <footer className="mt-14 border-t border-zinc-100 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1 text-zinc-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Support</p>
          <ul className="space-y-1 text-zinc-600">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Safety</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <ul className="space-y-1 text-zinc-600">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Get the app</p>
          <div className="flex gap-3">
            <div className="h-10 w-28 rounded-lg bg-zinc-900"></div>
            <div className="h-10 w-28 rounded-lg bg-zinc-900"></div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-zinc-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} foodpanda+. All rights reserved.</p>
          <p>Made with ♥ for good food.</p>
        </div>
      </div>
    </footer>
  );
}
