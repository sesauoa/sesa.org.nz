import React from "react";

export default function JoinButton() {
    return (
        <div className="flex justify-center">
          <a
            key="join-button"
            href="/join"
            className="bg-sesa-teal-light cursor-pointer rounded-full font-sans text-lg text-white inline transition-transform duration-200 hover:scale-110 px-6 py-1"
          >
            Join
          </a>
        </div>
    );
    }