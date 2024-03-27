'use client'
import { useState } from "react";
import UserForm from "../shared/userform";

export default function ParentComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <UserForm isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}