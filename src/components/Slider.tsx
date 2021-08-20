import { ChangeEventHandler, FC } from 'react'

interface Props {
	min: number
	max: number
	value: number
	handleChange: ChangeEventHandler<HTMLInputElement>
}

const Slider: FC<Props> = ({ min, max, value, handleChange }) => {
	return (
		<div className='slider-container'>
			<input
				type='range'
				className='slider'
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Slider
