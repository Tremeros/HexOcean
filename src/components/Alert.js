import React from 'react'
import { AlertMessage } from '../styles'

const Alert = ({ errorMessage, alertType, size }) => {
	return (
		<AlertMessage alertType={alertType} size={size}>
			{errorMessage}
		</AlertMessage>
	)
}

export default Alert
