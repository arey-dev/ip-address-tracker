function GeolocationData({ heading, data }) {
  let text = data;

  if (heading === "location") {
    text = data[0] + ", " + data[1] + " " + data[2];
  }

  if (heading === "timezone") {
    const offset = parseInt(data) > 0 ? "+" + data : data;
    text = "UTC " + offset + ":00";
  }
  return (
    <div className="px-7">
      <h2 className=" relative bottom-2 text-gray-dark font-bold text-base tracking-wide uppercase">
        {heading}
      </h2>
      <p className=" relative top-2 font-bold text-gray-darker text-xl">
        {text}
      </p>
    </div>
  );
}

export function IPGeolocation({ geoData }) {
  const { ip, city, state_prov, zipcode, isp, time_zone } = geoData;

  return (
    <div className="grid grid-cols-4 divide-x-2 group">
      <GeolocationData heading="ip address" data={ip} />
      <GeolocationData heading="location" data={[city, state_prov, zipcode]} />
      <GeolocationData heading="timezone" data={time_zone.offset} />
      <GeolocationData heading="isp" data={isp} />
    </div>
  );
}
