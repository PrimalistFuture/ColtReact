function helpful() {
    console.log(`I am super helpful`);
}

function sort() {
    console.log('All sorted');
}

function sing() {
    console.log('La La La');
}
// Needs to be exported if we want to use it.
// The default means if the whole file is imported, the default thing that makes it out is this helpful function.
export default helpful;

// But if we want to export everything, we wrap it all in {}
export { sort, sing }