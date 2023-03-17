export function getMonths(object) {
  let property;
  let propertiesArray = [];
  for (property in object) {
    propertiesArray.push(property);
  }
  return propertiesArray;
}

export function getValues(object) {
  return Object.values(object);
}