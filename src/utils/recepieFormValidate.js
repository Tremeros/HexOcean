export function recepieFormValidate(values) {
	const errors = {}

	if (!values.name) {
		errors.name = 'Name is Required'
	}

	if (!values.preparation_time) {
		errors.preparation_time = 'Preparation time is required'
	}

	if (!values.type) {
		errors.type = 'Dish type is required'
	}

	if (!values.duration) {
		errors.duration = 'Duration is required'
	}

	if (values.type === 'pizza' && !values.no_of_slices) {
		errors.no_of_slices = 'Number of slices is required'
	}
	if (values.type === 'pizza' && Number(values.no_of_slices) < 0) {
		errors.no_of_slices = 'Must be between 1 and 10'
	}
	if (values.type === 'pizza' && Number(values.no_of_slices) > 10) {
		errors.no_of_slices = 'Must be between 1 and 10'
	}

	if (values.type === 'pizza' && !values.diameter) {
		errors.diameter = 'Diameter is required'
	}

	if (values.type === 'soup' && Number(values.spiciness_scale) < 0) {
		errors.spiciness_scale = 'Must be between 1 and 10'
	}
	if (values.type === 'soup' && Number(values.spiciness_scale) > 10) {
		errors.spiciness_scale = 'Must be between 1 and 10'
	}

	if (values.type === 'sandwich' && !values.slices_of_bread) {
		errors.slices_of_bread = 'Slices of bread is required'
	}

	return errors
}
