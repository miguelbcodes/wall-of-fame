import { getRecords } from "../../dataHelperFunctions"

const hardStatsData = require('../../data/hardStats.json');

export const data = {
  series: [{
    name: 'Year',
    type: 'dimension'
  }, {
    name: 'Months',
    type: 'dimension'
  }, {
    name: 'Found Support In Community',
    type: 'measure'
  }],
  records: getRecords(hardStatsData, 'year, month', 'stackies who found support in the community')
}