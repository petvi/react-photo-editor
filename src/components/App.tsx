import { ChangeEventHandler, FC, useState } from 'react'
import SidebarItem from './SidebarItem'
import Slider from './Slider'
import { Option } from '../types'
import { DEFAULT_OPTIONS } from '../constants'

const App: FC = () => {
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0)

	const [options, setOptions] = useState<Option[]>(DEFAULT_OPTIONS)

	const selectedOption = options[selectedOptionIndex]

	const handleSliderChange: ChangeEventHandler<HTMLInputElement> = ({
		target,
	}) => {
		setOptions(prevOptions => {
			return prevOptions.map((option, index) => {
				if (index !== selectedOptionIndex) return option
				return { ...option, value: Number(target.value) }
			})
		})
	}

	function getImageStyle() {
		const filters = options.map(option => {
			return `${option.property}(${option.value}${option.unit})`
		})

		return { filter: filters.join(' ') }
	}

	return (
		<div className='container'>
			<div className='main-image' style={getImageStyle()} />
			<div className='sidebar'>
				{options.map((option, index) => {
					return (
						<SidebarItem
							key={index}
							name={option.name}
							active={index === selectedOptionIndex}
							handleClick={() => setSelectedOptionIndex(index)}
						/>
					)
				})}
			</div>
			<Slider
				min={selectedOption.range.min}
				max={selectedOption.range.max}
				value={selectedOption.value}
				handleChange={handleSliderChange}
			/>
		</div>
	)
}

export default App
