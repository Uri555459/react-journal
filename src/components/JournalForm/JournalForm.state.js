export const INITIAL_STATE = {
	isValid: {
		date: true,
		text: true,
		title: true,
		tag: true
	},
	values: {
		date: '',
		text: '',
		title: '',
		tag: ''
	},
	isFormReadyToSubmit: false
}

export const formReducer = (state, action) => {
	switch (action.type) {
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_STATE.isValid }
		case 'SUBMIT': {
			const titleValidity = state.values.title?.trim().length
			const textValidity = state.values.text?.trim().length
			const tagValidity = state.values.tag?.trim().length
			const dateValidity = state.values.date
			return {
				...state,
				isValid: {
					date: dateValidity,
					text: textValidity,
					title: titleValidity,
					tag: tagValidity
				},
				isFormReadyToSubmit: titleValidity && textValidity && dateValidity
			}
		}
		case 'SET_VALUE':
			return { ...state, values: { ...state.values, ...action.payload } }
		case 'CLEAR':
			return {
				...state,
				values: INITIAL_STATE.values,
				isFormReadyToSubmit: false
			}

		default:
			return state
	}
}
