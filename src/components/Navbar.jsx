import React from "react";

function Navbar() {
  return (
    <nav class="bg-[#FBF8F3] fixed w-full  top-0 left-0 z-0  ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="https://flowbite.com/" class="flex items-center">
          <span class="self-center text-2xl font-bold ">Chirp.</span>
        </a>
        <div class="flex md:order-2">
          <button>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
