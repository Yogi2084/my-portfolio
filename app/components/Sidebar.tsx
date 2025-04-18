// zink-portfolio/app/components/Sidebar.tsx

import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Sidebar() {
  return (
    <div className="w-[300px]  bg-[#4b4747] text-center p-16 hidden md:block rounded-2xl ">
      <div className="flex flex-col items-center">
        <img
          src="/icons/avatar.png"
          alt="Avatar"
          className="w-34 h-34 rounded-full border-2 border-white mb-4"
        />
        <h2 className="text-lg font-semibold">Yogananda K S</h2>
        <p className="text-sm text-gray-400">Full StackDeveloper</p>
        <div className="mt-6 space-y-2 text-left text-sm">
          <p>
            <strong>Email:</strong> yogananda.1si22is405...
          </p>
          <p>
            <strong>Phone:</strong> +91 96861*****
          </p>
          <p>
            <strong>Location:</strong> Karnataka, India
          </p>
        </div>
      </div>
    </div>
  );
}
