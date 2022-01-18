processPayment = (amount) => {
  console.log(`Collecting payment of ${amount}`)
}

processOrder = (orderId, amount) => {
  console.log(`${orderId} is being processed`)

  processPayment(amount)

  console.log(`${orderId} has been fully processed`)
}

console.log("processing orders")

let order1 = processOrder(12321, 10.99)
let order2 = processOrder(12322, 12.99)
let order3 = processOrder(12323, 15.0)

console.log("All the orders have been processed")
