export const resetForm = (setState) => {
	setState(true)
	setTimeout(() => setState(false), 300)
}