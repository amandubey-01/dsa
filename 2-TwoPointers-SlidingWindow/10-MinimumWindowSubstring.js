/*
Minimum Window Substring - https://leetcode.com/problems/minimum-window-substring/description/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

// Brute Force Method

/* 
Pseudo Code

best = ""

for i in 0..n-1:
    have = empty map
    for j in i..n-1:
        have[s[j]]++
        if have contains all chars of t:
            update best
            break
return best
*/


// var minWindow = function(s, t) {
//     if (t.length > s.length) return "";

//     // freq map of t
//     const need = new Map();
//     for(let ch of t){
//         need.set(ch, (need.get(ch) || 0) + 1 );
//     }

//     let bestLen = Infinity;
//     let bestStart = -1;

//     for (let i = 0; i < s.length ; i++){
//         const have = new Map();

//         for (let j = i; j < s.length ; j++){
//             const ch = s[j];
//             have.set(ch, (have.get(ch) || 0) + 1 );

//             // check validity
//             let valid = true;
//             for (let [ch,cnt] of need.entries()){
//                 if ((have.get(ch) || 0) < cnt){
//                     valid = false;
//                     break
//                 }
//             }

        

//             if(valid){
//                 const len = j - i + 1;
//                 if(len < bestLen){
//                     bestLen = len;
//                     bestStart = i;
//                 }
//                 break; // smallest for this i found;
//             }
//         }

//     }

//     return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLen);

// };

/*
Time complexity of Brute Force Method:

i loop runs n times

j loop can run up to n times for each i
that gives O(n²) substrings checked

And for every substring, we run this check:

for (let [c, cnt] of need.entries()) ...
That loop can run up to |t| unique characters (worst case ≈ |t|)
So total worst case:
O(n² * |t|)
About your line:
"we stop until and unless we find number of element of t"
We stop early only after we find a valid substring for that i.
But in worst case, many i values will not find valid quickly (or not at all), so j still goes far → still n².
So worst-case complexity stays O(n² * |t|).
*/
/*
Space Complexity: 
pace complexity is O(|t|) because of the maps

We store frequency counts in:

need map → up to |t| characters

have map → also up to |t| (or up to unique chars in window)

So extra space used is mainly for these maps → O(|t|) (or O(unique chars)).
*/

// Sliding Window 

/*
Pseudo Code
need = frequency count of t
window = empty frequency count

l = 0
formed = 0
required = number of unique chars in need

for r from 0 to n-1:
    add s[r] into window

    if s[r] is in need and window[s[r]] == need[s[r]]:
        formed++

    while formed == required:
        update best answer
        remove s[l] from window
        if s[l] is in need and window[s[l]] < need[s[l]]:
            formed--
        l++
return best

*/

var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    // Need Map - the chars and their respective frequency
    const need = new Map();
    for (let ch of t){
        need.set(ch, (need.get(ch) || 0) + 1)
    }


    // Window Map - holds the current chars and their frequency
    const window = new Map();

    // Unique chars in t
    const required = need.size;
    // Count of how many unique characters currently satisfied in the window.
    let formed = 0;

    let l = 0;
    let bestLen = Infinity;
    let bestStart = -1;

    for (let r = 0; r < s.length; r++){
        let ch = s[r];

        window.set(ch, (window.get(ch) || 0) + 1);

        // Check if the above char is needed and it satisfies the frequency
        if(need.has(ch) && need.get(ch) === window.get(ch)){
            formed++;
        }
        
        // Since now this has every elements of t with required frequency
        // Shrink window size while window is valid

        while( l <=r && formed === required){
            let len = r - l + 1;
            if(len < bestLen){
                bestLen = len;
                bestStart = l;
            }

            // remove left char
            let leftChar = s[l];
            window.set(leftChar, window.get(leftChar) - 1);

            // if left char was needed and now has lesser frequency than required --> invalid
            if(need.has(leftChar) && window.get(leftChar) < need.get(leftChar)){
                formed--;
            }
            l++
        }


        
    }

    return bestLen === Infinity ? "": s.slice(bestStart, bestStart + bestLen);
}
