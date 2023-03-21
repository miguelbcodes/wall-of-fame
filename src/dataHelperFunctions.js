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

export function getSeries(dimensionString, measureString) {
  let dimensions = dimensionString.split(', ');
  let measures = measureString.split(', ');
  let series = [];
  let values;
  dimensions.forEach(dimension => {
    values = {};
    values.name = dimension;
    values.type = 'dimension';
    series.push(values);
  })
  measures.forEach(measure => {
    values = {};
    values.name = measure;
    values.type = 'measure';
    series.push(values);
  })
  return series;
}

export function getSource(data, dimensionsArray) {
  let source = [];
  for (let dataObject = 0; dataObject < data.length; dataObject++) {
    let obj = {};
    dimensionsArray.forEach(dimension => {
      if (dimension == 'month') {
        obj[dimension] = `${data[dataObject][dimension]} ${data[dataObject]['year']}`;
      } else {
        obj[dimension] = data[dataObject][dimension]
      }
    })
    source.push(obj)
  }
  return source;
}

export function getSeriesData(data, name, value) {
  let seriesData = [];
  for (let dataObject = 0; dataObject < data.length; dataObject++) {
      let obj = {};
      obj.name = data[dataObject][name];
      obj.value = data[dataObject][value];
      seriesData.push(obj)
  }
  return seriesData;
}