function maxDifference(px) {
  let maxDifferenceSoFar = -1

  let initialStockPrice = px[0]

  for (let i = 1; i < px.length; i++) {
    let currentStockPrice = px[i]

    if (currentStockPrice < initialStockPrice) {
      initialStockPrice = currentStockPrice
    }

    let currentDifference = currentStockPrice - initialStockPrice

    maxDifferenceSoFar = Math.max(currentDifference, maxDifferenceSoFar)
  }

  console.log(maxDifferenceSoFar)
  return maxDifferenceSoFar
}

maxDifference([7, 1, 2, 5])
