export default function validateinfo(values) {
    let errors = {};

    // if (!values.size.trim()) {
    //     errors.size = "Size is Required"
    // }

    if (!values.quantity.trim()) {
        errors.quantity = "Quantity is Required"
    }

    return errors;
}
