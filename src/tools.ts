/**
 * Capitalize the first letter of a string.
 *
 * tools.capitalizeFirstLetter("this is a sentence.");
 *
 * "This is a sentence."
 */
export const capitalizeFirstLetter = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}