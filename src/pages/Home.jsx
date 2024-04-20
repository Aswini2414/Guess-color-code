import React,{useState,useEffect} from 'react';
import useLogic from '../Logic/useLogic';
import { toast } from "react-hot-toast";

const Home = () => {
    const [bgColor, setBgColor] = useState(false);
    const {currentColor,allColorsFin,
      populateQuiz
    } = useLogic();

    console.log(currentColor, allColorsFin);
    useEffect(() => {
        console.log("use effect");
        console.log(populateQuiz());
    }, []);
    
    const handleClick = (color) => {
        setBgColor(true);
        if (currentColor == color) {
            toast.success("Hurrah!!! correct🥳");
        } else {
            toast.error("Wrong Guess!!!");
        }
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        
}

  return (
      <div>
          <h1 className=' font-mono italic text-2xl font-bold mt-4 mb-7 '>Guess Hexcode Of the Color</h1>
          <div style={{backgroundColor:currentColor}} className={` min-w-50 min-h-50 rounded p-20`}>
        
      </div>
      <div className="flex items-center justify-around gap-4 bg-green p-4">
        {allColorsFin.map((color) => {
          return (
            <>
              <div
                style={{
                  backgroundColor:
                    bgColor  ? color : "white",
                }}
                className="p-2 shadow-md drop-shadow cursor-pointer rounded "
                onClick={() => handleClick(color)}
              >
                {color}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Home