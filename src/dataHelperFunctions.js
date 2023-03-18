export function getRecords(data, dimensionString, measureString) {
  let dimensions = dimensionString.split(', ');
  let measures = measureString.split(', ');
  let records = [];
  let values;
  for (let row = 0; row < data.length; row++) {
    values = [];
    dimensions.forEach(dimension => {
      values.push(data[row][dimension]);
    });
    measures.forEach(measure => {
      values.push(data[row][measure]);
    });
    records.push(values);
  }
  return records;
}
