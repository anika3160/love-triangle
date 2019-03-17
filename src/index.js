/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let count=0;
    let d=0;//231
    for (let i = 0; i < preferences.length; i++) {
        if (preferences[i] !== i) {
            let b = preferences[i] - 1; //b=1
            let c = preferences[b] - 1; //c=2
            if (preferences[c] - 1 === i)
                if ((preferences[b] !== preferences[c]) && (preferences[b] !== preferences[i]) && (preferences[c] !== preferences[i])) {
                    count++;
                    preferences[i] = -1;
                    preferences[b] = -1;
                    preferences[c] = -1;
                }
            d++;
        }
    }

    return count;
};
