import { SearchButton } from "./SearchButton";

export function SearchBar() {
  return (
    <form role="search" className="flex">
      <p className="w-96">
        <input
          className="py-2.5 px-5 w-full rounded-l-xl"
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
