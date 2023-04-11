export function SearchBar({ onFormSubmit }) {
  return (
    <form
      role="search"
      className="flex mx-auto max-w-lg mb-14 w-full"
      onSubmit={onFormSubmit}
    >
      <p className="w-full">
        <input
          className="py-2.5 px-5 w-full rounded-l-xl text-xl"
          id="q"
          type="search"
          name="q"
          aria-label="Search IP address"
          placeholder="Search for any IP address or domain"
        />
      </p>
      <SearchButton />
    </form>
  );
}

function SearchButton() {
  return (
    <button className="bg-gray-darker px-5 rounded-r-xl">
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  );
}
