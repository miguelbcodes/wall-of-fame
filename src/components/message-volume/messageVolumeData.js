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
    name: 'Total Message Volume',
    type: 'measure'
  }],
  records: getRecords(hardStatsData, 'message volume')
}