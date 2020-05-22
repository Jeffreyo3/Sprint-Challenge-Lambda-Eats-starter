import * as yup from 'yup';

const pizzaFormSchema = yup.object().shape({
    name: yup.string().trim().min(2).required("You must name your order"),
    size: yup.string().trim().required("You must select a pizza size"),
    sauce: yup.string().trim().required("You must select a sauce"),
    toppings: yup.array(yup.string()).max(10),
    glutenFree: yup.boolean(),
    specialInstructions: yup.string().trim(),
    quantity: yup.number().min(1).max(10).required("You must select a quantity")
})

export default pizzaFormSchema;