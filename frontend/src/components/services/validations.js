const lengthValidation = (data) => {
    return data !== undefined && data.length > 0
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