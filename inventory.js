

function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    return price * (1 - discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // return products.filter(callback); ;;; jenny
    // TODO: Implement filtering logic
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports =
{
    calculateDiscount,
    filterProducts,
    sortInventory,
};