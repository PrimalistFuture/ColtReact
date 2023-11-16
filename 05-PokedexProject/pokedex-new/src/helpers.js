function threeDigits(num) {
    let zerofilled = ('000' + num).slice(-3);
    return zerofilled;
}

function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
    let idx = items.indexOf(item);
    if (idx !== -1) {
        items.splice(idx, 1);
        return items;
    } else {
        return undefined;
    }
}

export { threeDigits, choice, remove };