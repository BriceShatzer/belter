
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
