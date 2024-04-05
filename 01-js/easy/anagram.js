/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
        return false;
    }

    let isAnagram = true;

    for (let i = 0; i < str1.length; i++) {
        let isFound = false;
        for (let j = 0; j < str1.length; j++) {
            if (str1.charAt(i) === str2.charAt(j)) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            isAnagram = false;
            break;
        }
    }

    return isAnagram;
}
}

module.exports = isAnagram;
