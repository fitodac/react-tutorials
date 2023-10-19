import { makeRandomID } from './makeRandomId'

/**
 * Esta función hace la lógica para mostrar 
 * los numeritos en la paginación
 * @param {number} current 
 * @param {number} total 
 * @param {number} pagesPerView 
 * @returns un Array con los números de la paginación
 */
export const calculatePager = ({
	current = 1,
	total = 0,
	pagesPerView = 1
}) => {

	const halfPerPage = Math.floor(pagesPerView / 2)
	let start = Math.max(current - halfPerPage, 1)
	let end = Math.min(start + pagesPerView - 1, total)

	if( start > total ) start = total

	const item = (number, key, active = false) => ({
		key,
		number,
		active
	})

	const p = []
	for(let i = start; i <= end; i++){
		p.push(
			item(
				i, 
				makeRandomID(6),
				i === current
			)
		)
	}

	if( p.length < pagesPerView ){
		const faltan = pagesPerView - p.length

		for(let i = 1; i <= faltan; i++){
			p.unshift(
				item(
					start - i, 
					makeRandomID(6)
				)
			)
		}
	}

	return p

}