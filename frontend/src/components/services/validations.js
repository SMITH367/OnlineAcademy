const lengthValidation = (data) => {
    return data !== undefined
}

const emailValidation = (email) => {
    // eslint-disable-next-line
    const testEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let valEmail = testEmail.test(email)
    return valEmail
}



export {
    lengthValidation,
    emailValidation
}