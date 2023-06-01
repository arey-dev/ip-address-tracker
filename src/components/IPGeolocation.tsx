function GeolocationData({ heading, data }) {
  const formatter = headingFormatters[heading] || ((data) => data);
  const text = formatter(data);

  return (
    <div className="px-5 text-center md:text-start">
      <h2 className=" relative md:bottom-2 text-gray-dark font-display text-xs sm:text-sm md:text-base font-medium tracking-widest md:tracking-wider uppercase">
        {heading}
      </h2>
      <p className="relative md:top-1 font-bold font-body text-gray-darker text-base sm:text-lg md:text-xl lg:text-2xl">
        {text}
      </p>
    </div>
  );
}

export function IPGeolocation({
  geoData: { ip, city, state_prov, zipcode, isp, time_zone },
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 divide-x-2 group">
      <GeolocationData heading="ip address" data={ip} />
      <GeolocationData heading="location" data={[city, state_prov, zipcode]} />
      <GeolocationData heading="timezone" data={time_zone.offset} />
      <GeolocationData heading="isp" data={isp} />
    </div>
  );
}

// utilities
function formatLocation(data) {
  return data[0] + ", " + data[1] + " " + data[2];
}

function formatTimezone(data) {
  const offset = parseInt(data) > 0 ? "+" + data : data;
  return "UTC " + offset + ":00";
}

const headingFormatters = {
  location: formatLocation,
  timezone: formatTimezone,
};