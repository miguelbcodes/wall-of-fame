import { rawData } from '../../data/rawData.js'
import { getMonths, getValues } from "../../dataHelperFunctions"

export const data = {
  series: [{
    name: 'Months',
    type: 'dimension',
    values: getMonths(rawData["Total Activated Users"])
  }, {
    name: 'Total Activated Users',
    type: 'measure',
    values: getValues(rawData["Total Activated Users"])
  }
  ],
}