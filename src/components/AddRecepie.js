import React from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
	RecepieForm,
	FormField,
	FormContainer,
	FormTitle,
	FormSubtitle,
	InputsContainer,
	SubmitButton,
} from '../styles'
import { recepieFormValidate, alertsTypes } from '../utils'
import Alert from './Alert'
import img from '../assets/images/background.jpg'

const AddRecepie = (props) => {
	const onSubmit = (formProps) => {
		const errors = recepieFormValidate(formProps)
		const isValidate = Object.keys(errors).length === 0

		if (!isValidate) {
			props.setValidationErrors(errors)
		} else {
			props.addRecepie(formProps)
		}
	}

	const { handleSubmit, success, error, validationErrors, dishType } = props

	const changeDishType = (e) => {
		props.setDishType(e.target.value)
	}

	return (
		<FormContainer img={img}>
			<RecepieForm onSubmit={handleSubmit(onSubmit)}>
				<InputsContainer>
					<FormTitle>Order</FormTitle>
					<FormSubtitle>Choose Your dish</FormSubtitle>

					<FormField>
						<Alert
							errorMessage={validationErrors.name}
							alertType={alertsTypes.error}
						/>
						<label>Dish Name</label>
						<Field name='name' type='text' component='input' />
					</FormField>

					<FormField>
						<Alert
							errorMessage={validationErrors.preparation_time}
							alertType={alertsTypes.error}
						/>
						<label>Preparation time</label>
						<Field
							name='preparation_time'
							type='time'
							step='2'
							component='input'
						/>
					</FormField>

					<FormField>
						<Alert
							errorMessage={validationErrors.type}
							alertType={alertsTypes.error}
						/>
						<label>Type</label>
						<Field
							name='type'
							step='2'
							component='select'
							onChange={(e) => changeDishType(e)}>
							<option />
							<option value='pizza'>Pizza</option>
							<option value='soup'>Soup</option>
							<option value='sandwich'>Sandwich</option>
						</Field>
					</FormField>

					<FormField>
						<Alert
							errorMessage={validationErrors.duration}
							alertType={alertsTypes.error}
						/>
						<label>Duration</label>
						<Field
							name='duration'
							type='number'
							step='0.01'
							min='0'
							component='input'
						/>
					</FormField>
					{dishType === 'pizza' && (
						<>
							<FormField>
								<Alert
									errorMessage={validationErrors.no_of_slices}
									alertType={alertsTypes.error}
								/>
								<label>Number of slices</label>
								<Field name='no_of_slices' type='number' component='input' />
							</FormField>

							<FormField>
								<Alert
									errorMessage={validationErrors.diameter}
									alertType={alertsTypes.error}
								/>
								<label>Diameter</label>
								<Field
									name='diameter'
									type='number'
									step='0.01'
									min='0'
									component='input'
								/>
							</FormField>
						</>
					)}
					{dishType === 'soup' && (
						<FormField>
							<Alert
								errorMessage={validationErrors.spiciness_scale}
								alertType={alertsTypes.error}
							/>
							<label>Spiciness scale</label>
							<Field name='spiciness_scale' type='number' component='input' />
						</FormField>
					)}
					{dishType === 'sandwich' && (
						<FormField>
							<Alert
								errorMessage={validationErrors.slices_of_bread}
								alertType={alertsTypes.error}
							/>
							<label>Slices of bread</label>
							<Field name='slices_of_bread' type='number' component='input' />
						</FormField>
					)}
				</InputsContainer>

				<div>
					{alertsTypes.success && (
						<Alert
							errorMessage={success}
							alertType={alertsTypes.success}
							size={'2rem'}
						/>
					)}
					{alertsTypes.error && (
						<Alert
							errorMessage={error}
							alertType={alertsTypes.error}
							size={'2rem'}
						/>
					)}
					<SubmitButton>Add recepie</SubmitButton>
				</div>
			</RecepieForm>
		</FormContainer>
	)
}

function mapStateToProps(state) {
	return {
		success: state.recepie.success,
		error: state.recepie.error,
		dishType: state.recepie.dishType,
		validationErrors: state.recepie.validationErrors,
	}
}

export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'addrecepie' })
)(AddRecepie)
