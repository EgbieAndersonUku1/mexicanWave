function wave(word) {
    const waveList = [];
    previousChars = "";
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (char) {
            const newWord = previousChars + (char.toUpperCase() + word.substring(i + 1));
            previousChars += char
            
            if (newWord !== word) {
                waveList.push(newWord)
            }
           
        }
    }
   
    return waveList;

}

console.log(wave("hello"));       // Output: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("codewars"));    // Output: ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave("wave"));        // Output: ["Wave", "wAve", "waVe", "wavE"]
console.log(wave("a b"));         // Output: ["A b", "a B"]
console.log(wave(""));            // Output: []
console.log(wave("  "));          // Output: []
console.log(wave("two words"));   // Output: ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave("Mexican Wave"));// Output: ["Mexican Wave", "mExican Wave", "meXican Wave", "mexIcan Wave", "mexiCan Wave", "mexicAn Wave", "mexicaN Wave", "mexican Wave", "mexican wAve", "mexican waVe", "mexican wavE"]
console.log(wave("python"));      // Output: ["Python", "pYthon", "pyThon", "pytHon", "pythOn", "pythoN"]
