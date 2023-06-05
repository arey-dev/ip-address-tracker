// define the shape and property types of geoData
type GeoData = {
  ip: string;
  city: string;
  state_prov: string;
  zipcode: string;
  isp: string;
  time_zone: {
    offset: string;
  };
};

// this makes sure that the object passed to the
// IPGeolocation component has the same shape and type
// as GeoData type
type IPGeolocationProps = {
  geoData: GeoData;
};

// define types for GeolocationData
type GeolocationDataProps = {
  heading: string;
  data: string | string[];
};

function GeolocationData({ heading, data }: GeolocationDataProps) {
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

export function IPGeolocation({ geoData }: IPGeolocationProps) {
  const { ip, city, state_prov, zipcode, isp, time_zone } = geoData;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 divide-x-2 group">
      <GeolocationData heading="ip address" data={ip} />
      <GeolocationData heading="location" data={[city, state_prov, zipcode]} />
      <GeolocationData heading="timezone" data={time_zone.offset} />
      <GeolocationData heading="isp" data={isp} />
    </div>
  );
}

// formats the location data
function formatLocation(data: string | string[]) {
  return data[0] + ", " + data[1] + " " + data[2];
}

// formats the timezone data
function formatTimezone(data: string | string[]) {
  const offset = Array.isArray(data) ? data[0] : data;
  return "UTC " + (parseInt(offset) > 0 ? "+" + offset : offset) + ":00";
}

// Define the mapping of heading to formatter functions.
const headingFormatters: {
  // this line denotes that the object headingFormatters has string keys
  // and has a object values that are functions that takes an argument
  // 'data' of type 'string' or 'string[]'
  [key: string]: (data: string | string[]) => string;
} = {
  location: formatLocation,
  timezone: formatTimezone,
};
