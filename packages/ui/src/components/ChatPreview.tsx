import React from "react";

export const ChatPreview: React.FC = () => (
  <div
    className="mx-auto w-full max-w-md bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border border-blue-100"
    aria-label="Chat Form Preview"
  >
    <div className="w-full flex flex-col gap-2">
      <div className="self-start bg-white rounded-xl px-4 py-2 shadow text-gray-800 text-base max-w-[80%]">
        [Chat Form Preview Placeholder]
      </div>
      <div className="self-end bg-blue-100 rounded-xl px-4 py-2 shadow text-blue-700 text-base max-w-[80%]">
        ...
      </div>
    </div>
  </div>
);

export default ChatPreview;