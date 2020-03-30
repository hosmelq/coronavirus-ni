import {format as baseFormat} from 'date-fns'
import {es} from 'date-fns/locale'

const locales = {es}

export function format(date, formatStr, options = {}) {
  return baseFormat(date, formatStr, {
    locale: locales.es,
    ...options,
  })
}
