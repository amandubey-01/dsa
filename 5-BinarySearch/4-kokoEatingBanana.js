/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and 
will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas 
from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas 
during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

 

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:

1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

// <---------- Brute Force Method --------------->
function minEatingSpeed (piles, H){
    let maxPile = Math.max(...piles);

    for(let k = 1 ; k <= maxPile; k++){
        let totalHours = 0;
        for (pile of piles){
            totalHours = totalHours + Math.ceil(pile/k)
        }

        if (totalHours <= H) return k;

    }
}
// But time complexity would be
// For each k the outer loop lets say run M times and the inner loop will run N times than Time Complexity = O(N X M)
// Space Complexity = O(1)


console.log(minEatingSpeed([3,6,7,11], 8))

// <-------- Binary Search Method------------->
var minEatingSpeed = function (piles, h){
    let s = 1;
    let e = 1;

    for (let i = 0; i < piles.length; i++){
        e = Math.max(e, piles[i]);
    }

    let ans = -1;

    while(s <= e){
        const mid = Math.floor((s + e)/2);
        let timeTaken = 0
        for (let i = 0; i < piles.length ; i++){
            timeTaken = timeTaken + Math.ceil(piles[i] / mid);
        }
        if (timeTaken <= h){
            ans = mid;
            e = mid - 1
        } else {
            s = mid + 1;
        }

    }

    return ans;
}
console.log(minEatingSpeed([3,6,7,11], 8))

/*Time complexity: 
Let say M = max(piles)
and N = array length.
The outer loop runs from 1 to M times in each iteration it decides to either go left or right. Eventually decrreasing the search space by half.
That gives log(M).
And for such iteration we find timeTaken for each element, that is N
So, Time complexity is O(N  * log(M))
Space Complexity = O(1) ----------> No extra space required for the problem.
*/