import { rawData } from '../../data/rawData.js'
import { getMonths, getValues } from "../../dataHelperFunctions"

export const data = {
  series: [{
    name: 'Months',
    type: 'dimension',
    values: getMonths(rawData["Total Message Volume"])
  }, {
    name: 'Total Message Volume',
    type: 'measure',
    values: getValues(rawData["Total Message Volume"])
  }
  ],
}