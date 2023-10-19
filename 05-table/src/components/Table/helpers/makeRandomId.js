/**
 * Genera un ID random
 * @param {number} length 
 * @param {string} dict 
 * @returns Un ID random con la cantidad de caracteres que se definen en @length
 */
export const makeRandomID = (length, dict='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => Array.from({length}, _=>dict[~~(Math.random()*dict.length)]).join('')