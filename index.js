// Greedy approach
function solution(W,P,C){
  let cap = 0
  let prof = 0
  const findMax = A => {
    let idx = 0;
    let m = A[0]
    for(let i = 0; i < A.length; i++){
      if(A[i] >= m ){
        m = A[i]
        idx = i 
      }
    }
    return idx
  }

  while(cap < C){
    let maxIndex = findMax(P)

    if(P[maxIndex] === -1) break

    if(cap + W[maxIndex] > C){
      P[maxIndex] = -1
    }else {
      cap += W[maxIndex]
      prof += P[maxIndex]}
      P[maxIndex] = -1      
  }

return prof
}

const max = (a, b) => a > b ? a : b

// Dynamic programming
function maxKnapsack(items,weights, W) {
    let cache = [];
    for (g = 0; g <= items.length; g++){
      cache[g] = [];
      for (h = 0; h <= W; h++) {
        cache[g][h] = 0;
      } 
     }
    
    for(let i = 0; i <= items.length; i++){
      for(let j = 0; j <= W; j++){
        if(i === 0 || j === 0){
          cache[i][j] = 0
        }
        else if(weights[i - 1] <= j){
          let exc = cache[i - 1][j];
          let inc =  items[i - 1] + cache[i - 1][j - weights[i - 1]]
          
          cache[i][j] = Math.max(inc, exc)
           
        }else{
          cache[i][j] = cache[i - 1][j]
        }
      }
    }
    return cache[items.length][W - 1]
}

const recursiveKnapsack = function(weightCap, weights, values, i) {
  if(i >= weights.length || weightCap <= 0){
    return 0
  }
  else if(weights[i] < weightCap){
    let max = values[i] + recursiveKnapsack(weightCap - weights[i],weights, values, i+=1)
    let min = recursiveKnapsack(weightCap ,weights, values, i+=1)
  return Math.max(max, min)
  }else return recursiveKnapsack(weightCap ,weights, values, i+=1)
  
};

const W = [3,2,10,1,7,6];
const P = [5,4,8,3,1,2];
const w = [2,4,3,5,5]
const p = [3,4,1,2,6]

// console.log(maxKnapsack(P, W, 11))
// console.log(solution(W,P,11))
console.log(maxKnapsack(p, w, 12))
console.log(solution(w,p,12))