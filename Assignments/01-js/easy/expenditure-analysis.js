/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const groupedTransaction = {};

  // Iterate through transactions to calculate total spent by category
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If category not seen before initialize it else, add the price to the total
    if (!groupedTransaction[category]) {
      groupedTransaction[category] = {
        category,
        totalSpent: price,
      };
    } else {
      groupedTransaction[category].totalSpent += price;
    }
  });

  // Convert the object to an array of values
  const result = Object.values(groupedTransaction);

  return result;
}

module.exports = calculateTotalSpentByCategory;
