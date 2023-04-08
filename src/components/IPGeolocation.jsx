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
  let text = data;

  if (heading === "location") {
    text = data[0] + " " + data[1];
  }

  if (heading === "timezone") {
    text = "UTC " + data;
  }
  return (
    <div className="px-7">
      <h2 className=" relative bottom-2 text-gray-dark font-bold text-base tracking-wide uppercase">
        {heading}
      </h2>
      <p className=" relative top-2 font-bold text-gray-darker text-2xl">
        {text}
      </p>
    </div>
  );
}

export function IPGeolocation({ geoData }) {
  const { ip, location, isp } = geoData;

  return (
    <>
      <section className="relative z-50 max-w-5xl w-full mx-auto py-8 bg-white rounded-xl grid grid-cols-4 divide-x-2 shadow-lg group">
        <GeolocationData heading="ip address" data={ip} />
        <GeolocationData
          heading="location"
          data={[location.city, location.postalCode]}
        />
        <GeolocationData heading="timezone" data={location.timezone} />
        <GeolocationData heading="isp" data={isp} />
      </section>
    </>
  );
}
