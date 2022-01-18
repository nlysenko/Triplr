/**
 *
 * fetchData
 *
 */

import { Trips } from '@/app/data/trips'

export function fetchData(name: string) {
  switch (name) {
    case 'trips': {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(Trips)
        }, 300)
      })
    }

    default: {
      return false
    }
  }
}
