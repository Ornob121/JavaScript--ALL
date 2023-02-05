const names = ['abul', 'babul', 'cabul', 'dabul', 'kabul', 'labul', 'gabul', 'abul', 'cabul', 'labul'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
            console.log(unique);
        }
    }
    return unique;
}
const original = removeDuplicate(names);
console.log(original);
