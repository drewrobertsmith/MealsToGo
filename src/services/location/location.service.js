import camelize from "camelize";

//this requests a location availabel to us in mock data
export const locationRequest = (searchTerm) => { };

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
