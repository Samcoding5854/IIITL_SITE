// components/FloatingActionButton.tsx
import React from "react";

interface FloatingActionButtonProps {
  onClick: () => void;
  content: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, content }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-300 sticky p-4 m-2 text-2xl rounded-xl text-white font-extrabold hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 after:bg-blue-700 "
    >
      {content}
    </button>
  );
};

export default FloatingActionButton;
