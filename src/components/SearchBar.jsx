import { useState } from "react";

export function SearchBar({ onFormSubmit }) {
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.elements.q;

    if (!isValiIP(value)) {
      setError("Please enter a valid IP Address.");
      return;
    }

    setError("");
    onFormSubmit(value);
  }

  function isValiIP(ip) {
    const pattern =
      /^([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])\.([01]?\d{1,2}|2[0-4]\d|25[0-5])$/;
    return pattern.test(ip);
  }

  return (
    <>
      <section className="mb-6 md:mb-14 mx-auto max-w-lg w-full relative">
        <form role="search" className="flex" onSubmit={handleSubmit}>
          <p className="w-full">
            <input
              className="py-2.5 px-4 w-full rounded-l-xl text-xl placeholder:text-sm sm:placeholder:text-xl font-body"
              id="q"
              type="search"
              name="q"
              aria-label="Search IP address"
              placeholder="Search for any IP address or domain"
            />
          </p>
          <SearchButton />
        </form>
        {error && <p className="text-orange-400 font-medium absolute -bottom-7">{error}</p>}
      </section>
    </>
  );
}

function SearchButton() {
  return (
    <button className="bg-gray-darker px-5 rounded-r-xl cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  );
}
