export interface Option {
	name: string
	property: string
	range: {
		min: number
		max: number
	}
	value: number
	unit: 'px' | 'deg' | '%'
}
