/* eslint-disable max-len */
export const validateEmail = (email: string) => {
    const regex =
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};

export const validatePassword = (password: string) => {
    return password.length >= 8;
};

/* eslint-disable no-useless-escape */
export const validatePhone = (phone: string) => {
    const regex = /^([0-9\s\-\+\(\)]*)$/;
    return regex.test(phone);
};

export const validateAddress = (address: Address) => {
    if (!(address.latitude || address.longitude || address.city || address.country)) {
        return false;
    }
    return true;
};
