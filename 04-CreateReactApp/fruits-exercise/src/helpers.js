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

export { choice, remove }