export function order(parArray, parAttribute, parOrder) {
    var varChange = 1;
    if (parOrder == "reverse") {
        varChange = -1;
    }
    return parArray.sort((a, b) => {
        if (a[parAttribute] < b[parAttribute]) {
            return -1 * varChange;
        }
        if (b[parAttribute] < a[parAttribute]) {
            return 1 * varChange;
        }
        return 0;
    })
}