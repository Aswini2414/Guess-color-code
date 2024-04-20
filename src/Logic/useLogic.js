import React,{useState} from 'react'

const useLogic = () => {
  const [currentColor, setCurrentColor] = useState("");
  const [allColorsFin, setAllColorsFin] = useState([]);

  const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const generateRandomValue = (array) => {
      return array[Math.floor(Math.random() * array.length)];
  }
  
  const colorGenerator = () => {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor = newColor + generateRandomValue(letters);
    }
    return newColor;
  };

  const populateQuiz = () => {
    let currentColor = colorGenerator();
    let allColors = [];
    allColors.push(currentColor);
    allColors = populateOptions(allColors);
    setCurrentColor(currentColor);
    setAllColorsFin(allColors);
    return { currentColor, allColors };
  };

  const populateOptions = (optionsArray) => {
    let expectedLength = 3;
    while (optionsArray.length < expectedLength) {
      let color = colorGenerator();
      if (!optionsArray.includes(color)) {
        optionsArray.push(color);
      }
    }
    return optionsArray;
  };
  return { currentColor,allColorsFin,populateQuiz };
}

export default useLogic;