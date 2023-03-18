export function getRecords(data, measure) {
  let records = [];
  let values;
  for (let i = 0; i < data.length; i++) {
    values = [];
    values.push(data[i]["year"]);
    values.push(data[i]["month"]);
    values.push(data[i][`${measure}`]);
    records.push(values);
  }
  return records;
}
