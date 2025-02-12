export const pluralize = (count: number, singular: string, plural: string = `${singular}s`) => {
  return count === 1 ? singular : plural
}

export const isIntegerString = (value: string): boolean => /^-?\d+$/.test(value)

export const isPositiveIntegerString = (value: string): boolean => /^\d+$/.test(value)

export const convertStringToAlphanumeric = (str: string): string =>
  str
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')

export const getSlugFromString = (input: string, maxLength = 50): string => {
  const from =
    'ÁÄÂÀÃÅĄČÇĆĎĘÉĚËÈÊẼĔȆĞÍÌÎÏİŁŃŇÑÓÖÒÔÕØŘŔŚŠŞŤÚŮÜÙÛÝŸŽŻŹáäâàãåąāăčçćďęéěëèêẽĕȇğíìîïıłńňñóöòôõøðřŕśšşťúůüùûýÿžżźþÞĐđßÆa·/_,:;'
  const to =
    'AAAAAAACCCDEEEEEEEEEGIIIIILNNNOOOOOORRSSSTUUUUUYYZZZaaaaaaaaacccdeeeeeeeeegiiiiilnnnooooooorrssstuuuuuyyzzzbBDdBAa------'

  const result = Array.from(input)
    .map((char) => {
      const index = from.indexOf(char)

      return index > -1 ? to[index] : char
    })
    .join('')

  return result
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .slice(0, maxLength) // limit to maxLength chars
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-*|-*$/g, '') // remove leading and trailing dashes
}
