import { rawData } from '../../data/rawData.js'
import { getMonths, getValues } from "../../dataHelperFunctions"

export const data = {
  series: [{
    name: 'Months',
    type: 'dimension',
    values: getMonths(rawData["Found Support In Community"])
  }, {
    name: 'Found Support In Community',
    type: 'measure',
    values: getValues(rawData["Found Support In Community"])
  }
  ],
}