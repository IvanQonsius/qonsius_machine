// src/app/components/Sidebar.js

export default function Membersidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <a href="/members-only/dashboard" className="hover:text-gray-300">Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="/members-only/settings" className="hover:text-gray-300">Settings</a>
          </li>
          <li className="mb-2">
            <a href="/members-only/profile" className="hover:text-gray-300">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
