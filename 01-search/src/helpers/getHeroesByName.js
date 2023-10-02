/**
 * Este helper permite filtrar el array heroes de acuerdo
 * con el valor que se le pase en el parámetro 'name' que es 
 * el que se le pasa al realizar una búsqueda.
 */
import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
	
	/**
	 * Name se convierte a minúsculas y se aplica trim para 
	 * sanitizar el string
	 */
	name = name.toLowerCase().trim()
	/**
	 * Si name es vacío, retornará un array vacío
	 */
	if( !name.length ) return []

	/**
	 * Caso contrario, se retornarán todos los items del
	 * array que coincidan con el valor de 'name'
	 */
	return heroes.filter(hero => hero.superhero.toLowerCase().includes(name) )

}