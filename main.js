function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 1; 
    let vowelCounter = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      
      if (char === '.') {
        break;
      }
  
      lengthCounter++;
  
      if (vowels.includes(char)) {
        vowelCounter++;
      }
  
      if (char === ' ') {
        wordCounter++;
      }
    }
  
    return {
      length: lengthCounter,
      words: wordCounter,
      vowels: vowelCounter
    };
  }
  
  const sentence = "hello gomycode.";
  const result = analyzeSentence(sentence);
  console.log("the Length of the sentence is:", result.length);
  console.log("the number of Words in the sentence is:", result.words);
  console.log("the number of Vowels in the sentence is:", result.vowels);
  