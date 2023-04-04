import { Container } from "./Container";

function Divider() {
  return (
    <div
      className="inline-block border-l-2 h-3/4 my-au
  "
    ></div>
  );
}

function GeolocationData({ heading, data }) {
  return (
    <div className="px-7">
      <h2 className=" relative bottom-2 text-gray-dark font-bold text-base tracking-wide uppercase">
        {heading}
      </h2>
      <p className=" relative top-2 font-bold text-gray-darker text-2xl">
        {data}
      </p>
    </div>
  );
}

export function IPGeolocation() {
  return (
    <>
      <section className="relative z-50 max-w-5xl w-full mx-auto py-8 bg-white rounded-xl grid grid-cols-4 divide-x-2 shadow-lg group">
        <GeolocationData heading="ip address" data="192.212.174.101" />
        <GeolocationData heading="location" data="Brooklyn, NY 1001" />
        <GeolocationData heading="timezone" data="UTC-05:00" />
        <GeolocationData heading="isp" data="SpaceX Starlink" />
      </section>
    </>
  );
}
