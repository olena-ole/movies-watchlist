
function formatSearchQuery(str) {
    return str.split(' ').join('+');
}

export {formatSearchQuery};