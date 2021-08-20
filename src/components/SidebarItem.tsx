import { FC, MouseEventHandler } from 'react'

interface Props {
	name: string
	active: boolean
	handleClick: MouseEventHandler
}

const SidebarItem: FC<Props> = ({ name, active, handleClick }) => {
	return (
		<button
			className={`sidebar-item ${active ? 'active' : ''}`}
			onClick={handleClick}>
			{name}
		</button>
	)
}

export default SidebarItem
