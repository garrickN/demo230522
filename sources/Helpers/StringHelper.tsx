export const validatePhoneNumber = (phoneNumber: string) => {
    let regexp = new RegExp('^[+]?(0||)[0-9]{8}$');
    return regexp.test(phoneNumber);
};

export const validatePhoneNumberRaw = (phoneNumber: string) => {
let regexp = new RegExp('^[+]?0[0-9]{8}$');
return regexp.test(phoneNumber);
};

export function validateEmail(mail:string) {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true);
}
return (false);
}

export const validateSpecialCharacter = (text: string) => {
let char = /[-!@#$%^&*()+=\[\]{};':"\\|<>\/?_]+/;
return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(char, '');
};
export function formatString(x: string) {
return x.replace(/[^A-Za-z0-9]+/g, '');
}
