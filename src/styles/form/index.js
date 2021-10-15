import styled, { css } from 'styled-components'

export const FormContainer = styled.div`
	${({ img }) => css`
		height: 100vh;
		background-image: url(${img});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;

		justify-content: center;
	`}
`

export const RecepieForm = styled.form`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		min-height: 60rem;
		height: auto;
		margin-left: 40rem;
		padding: 2rem;
		width: 40rem;
		@media screen and (max-width: 425px) {
			margin-left: 0;
			margin: auto;
		}
	`}
`

export const FormTitle = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.black};

		font-size: 3.6rem;
		font-weight: 600;
		margin-top: 3rem;
	`}
`

export const FormSubtitle = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.black};

		font-size: 1.6rem;
		font-weight: 600;
		margin-top: 1rem;
	`}
`

export const InputsContainer = styled.div`
	${() => css`
		height: 5rem;
		width: 100%;
	`}
`

export const FormField = styled.fieldset`
	${() => css`
		border: none;
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	`}
`

export const SubmitButton = styled.button`
	${({ theme }) => css`
		background-color: ${theme.colors.submitButton};
		border-radius: 1.2rem;
		border: 0;
		box-sizing: border-box;
		color: ${theme.colors.white};
		cursor: pointer;
		font-size: 1.8rem;
		height: 5rem;
		margin-top: 3.8rem;
		text-align: center;
		width: 100%;
		@media screen and (max-width: 768px) {
			height: 7.5rem;
			font-size: 4rem;
		}
	`}
`

export const AlertMessage = styled.span`
	${({ alertType, size }) => css`
		color: ${alertType};
		font-size: ${size};
	`}
`
