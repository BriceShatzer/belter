
/* @flow */
/* eslint max-lines: 0 */


// turns any inputed item into a string
export function stringify(item : mixed) : string {
    if (typeof item === 'string') {
        return item;
    }

    if (item && item.toString && typeof item.toString === 'function') {
        // $FlowFixMe
        return item.toString();
    }

    return Object.prototype.toString.call(item);
}

// generates a number based hash | hashStr("hello world") -> 2793925847970047000
export function hashStr(str : string) : number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str[i].charCodeAt(0) * Math.pow((i % 10) + 1, 5);
    }
    return Math.floor(Math.pow(Math.sqrt(hash), 5));
}

// generates a string based hash | strHashStr("hello world") -> "xxmaumvfeem"
export function strHashStr(str : string) : string {
    let hash = '';

    for (let i = 0; i < str.length; i++) {
        let total = (str[i].charCodeAt(0) * i);

        if (str[i + 1]) {
            total += (str[i + 1].charCodeAt(0) * (i - 1));
        }

        hash += String.fromCharCode(97 + (Math.abs(total) % 26));
    }

    return hash;
}

// camelCase to kebab-case | camelToDasherize("userAccessToken") -> "user-access-token"
export function camelToDasherize(string : string) : string {
    return string.replace(/([A-Z])/g, (g) => {
        return `-${ g.toLowerCase() }`;
    });
}

// kebab-case to camelCase dasherizeToCamel("payment-confirmation-button") -> "paymentConfirmationButton"
export function dasherizeToCamel(string : string) : string {
    return string.replace(/-([a-z])/g, (g) => {
        return g[1].toUpperCase();
    });
}

// capitalizeFirstLetter("hello world") -> "Hello world"
export function capitalizeFirstLetter(string : string) : string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
