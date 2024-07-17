import React, { useState, useEffect } from 'react';
import '../index.css';

const Result = () => {
  const [reaction, setReaction] = useState(80);
  const [memory, setMemory] = useState(92);
  const [verbal, setVerbal] = useState(61);
  const [visual, setVisual] = useState(72);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [resultText, setResultText] = useState('Great');
  const [paragraphText, setParagraphText] = useState('You scored higher than 65% of the people who have taken these tests');
  const [passCount, setPassCount] = useState(0);
  const [failCount, setFailCount] = useState(0);

  useEffect(() => {
    const totalScore = reaction + memory + verbal + visual;
    const percentageScore = (totalScore / 400) * 100;
    setTotal(totalScore);
    setPercentage(percentageScore);

    const scores = [reaction, memory, verbal, visual];
    let pass = 0;
    let fail = 0;

    scores.forEach(score => {
      if (score < 40) {
        fail += 1;
      } else {
        pass += 1;
      }
    });

    setPassCount(pass);
    setFailCount(fail);

    if (percentageScore < 40) {
      setResultText('Fail');
      setParagraphText('You are fail in this test, please try again and good luck for next time.');
    } else if (percentageScore >= 40 && percentageScore < 60) {
      setResultText('Pass');
      setParagraphText('Good job! You passed the test.');
    } else if (percentageScore >= 60 && percentageScore < 80) {
      setResultText('Great');
      setParagraphText('You scored higher than 65% of the people who have taken these tests.');
    } else if (percentageScore >= 80) {
      setResultText('Excellent');
      setParagraphText('You scored higher than 80% of the people who have taken these tests. A+ grade.');
    }
  }, [reaction, memory, verbal, visual]);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-3/4 sm:w-4/5 md:w-3/5 lg:w-3/5 xl:w-1/2">
        <div className="text-white   bg-gradient-to-b from-blue-800 to-blue-500 rounded-3xl flex flex-col items-center p-8 shadow-lg h-fit md:w-1/2">
          <h4 className="text-opacity-70 text-lg text-black">Your Result</h4>
          <div className="bg-gradient-to-b from-blue-500 to-blue-800 rounded-full w-40 h-40 flex flex-col justify-center items-center mt-10 mb-12">
            <h1 id="result" className="text-5xl mb-2">{Math.round(percentage)}</h1>
            <h5 className="text-opacity-90 text-black p-1">of 100</h5>
          </div>
          <h3 className="mt-2 text-2xl text-black">{resultText}! </h3>
          <p className="text-opacity-70 mt-4">{paragraphText}</p>

        </div>
        <div className="bg-white bg-opacity-70 rounded-3xl p-8 shadow-lg w-full h-fit md:w-1/2 md:ml-0">
          <h2 className="mb-5">Summary</h2>
          <div className="flex flex-col gap-3">
            <div className="flex bg-red-200 p-3 rounded-md items-center">
              <img src="../src/assets/imgs/power.png" alt="Reaction" className="w-5" />
              <p className="text-red-600 flex-grow ml-3">Reaction</p>
              <input
                type="number"
                id="reaction"
                value={reaction}
                onChange={e => setReaction(Math.min(Math.max(e.target.value, 0), 100))}
                max="100"
                min="0"
                className="w-16 h-6 text-center"
              />
              <h4 className="ml-2 text-gray-700">/100</h4>
            </div>
            <div className="flex bg-yellow-200 p-3 rounded-md items-center">
              <img src="../src/assets/imgs/brain.png" alt="Memory" className="w-5" />
              <p className="text-yellow-600 flex-grow ml-3">Memory</p>
              <input
                type="number"
                id="memory"
                value={memory}
                onChange={e => setMemory(Math.min(Math.max(e.target.value, 0), 100))}
                max="100"
                min="0"
                className="w-16 h-6 text-center"
              />
              <h4 className="ml-2 text-black">/100</h4>
            </div>
            <div className="flex bg-green-200 p-3 rounded-md items-center">
              <img src="../src/assets/imgs/chat.png" alt="Verbal" className="w-5" />
              <p className="text-green-600 flex-grow ml-3">Verbal</p>
              <input
                type="number"
                id="verbal"
                value={verbal}
                onChange={e => setVerbal(Math.min(Math.max(e.target.value, 0), 100))}
                max="100"
                min="0"
                className="w-16 h-6 text-center"
              />
              <h4 className="ml-2 text-black">/100</h4>
            </div>
            <div className="flex bg-blue-200 p-3 rounded-md items-center">
              <img src="../src/assets/imgs/eye.png" alt="Visual" className="w-5" />
              <p className="text-blue-600 flex-grow ml-3">Visual</p>
              <input
                type="number"
                id="visual"
                value={visual}
                onChange={e => setVisual(Math.min(Math.max(e.target.value, 0), 100))}
                max="100"
                min="0"
                className="w-16 h-6 text-center"
              />
              <h4 className="ml-2 text-black">/100</h4>

            </div>
            <div className="flex bg-green-200 p-3 rounded-md items-center mt-0">
              <p className="flex-grow ml-2"> Pass: {passCount}</p>
              <p className="mr-4"> Fail: {failCount}</p>
            </div>
            <div className="flex bg-green-400 p-3 rounded-md items-center">
              <p className="flex-grow ml-3">Total</p>
              <h4 id="sum" className="ml-2 w-16 h-6 text-center">{total}</h4>
              <h5 className="ml-2 text-black">/400</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;