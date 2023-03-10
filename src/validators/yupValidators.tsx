import * as yup from 'yup';

export const formSchema = yup.object().shape({
    amount: yup.number().required("We need to know the value").min(1000),
	installments: yup.number().required("How many installments").max(12),
	mdr: yup.number().required("What is the rate?").positive().min(0),
})
  