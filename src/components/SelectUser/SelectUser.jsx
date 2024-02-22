import { useContext } from 'react'

import { UserContext } from '@/context/user.context'

export const SelectUser = () => {
	const { userId, setUserId } = useContext(UserContext)

	const changeUser = event => {
		setUserId(Number(event.target.value))
	}

	return (
		<select
			name='user'
			id='user'
			value={userId}
			onChange={changeUser}
		>
			<option value='1'>Admin</option>
			<option value='2'>User</option>
		</select>
	)
}
