import { useState } from "react";
import NavBar from "./NavBar";

const Chunk = () => {
  const [arr, setArr] = useState("");
  const [num, setNum] = useState(0);
  const [result, setResult] = useState([]);

  const handleArr = (e) => {
    setArr(e.target.value.split(","));
    console.log(arr);
  };
  const handleNum = (e) => {
    setNum(e.target.value);
    console.log(num);
  };

  const handleChunk = (arr, num) => {
    // console.log(arr);
    let newarr = [];
    if (num == 0) {
      return arr;
    } else {
      for (
        let i = 0;
        parseInt(i) < arr.length;
        i = parseInt(i) + parseInt(num)
      ) {
        // console.log(typeof i);
        // console.log(arr);
        newarr.push(arr.slice(i, parseInt(i) + parseInt(num)));
        console.log(i);
      }
      //   console.log(arr.length);
      return newarr;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newarr = handleChunk(arr, num);
    console.log(newarr);
    setResult(newarr);
  };

  // let valueInput = result.map((item) => {
  //   return `[${item}]`;
  // });

  return (
    <div className="flex">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div>
            <p className="mb-[50px]">
              Cho một mảng đầu vào, viết một function để chia đều mảng theo số
              phần chỉ định.
            </p>
          </div>
          <div className="py-[20px] px-[50px]">
            <form className="flex justify-center" onSubmit={handleSubmit}>
              <div className="mb-[50px] flex flex-col w-[70%]">
                <div className="flex w-full mb-[20px]">
                  <span className="text-[20px] font-[500] w-[15%] inline-block">
                    Input :{" "}
                  </span>
                  <input
                    type="text"
                    className="w-[85%] min-h-[50px] px-[8px]"
                    placeholder="Array"
                    onChange={handleArr}
                  />
                </div>
                <div className="flex w-full">
                  <span className="text-[20px] font-[500] w-[15%] inline-block">
                    Input :{" "}
                  </span>
                  <input
                    type="text"
                    className="w-[85%] min-h-[50px] px-[8px]"
                    placeholder="Key"
                    onChange={handleNum}
                  />
                </div>
                <div className="flex justify-center w-full mb-[30px]">
                  <button
                    className="min-h-[40px] block mt-[20px] bg-[#213547] text-[#fff] hover:bg-[#5080aa] min-w-[15%]"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex justify-center w-[100%]">
                  <span className="text-[20px] font-[500] pr-[20px] w-[15%]">
                    Output :{" "}
                  </span>
                  <p className="bg-[#fff] px-[5px] py-[10px] w-[85%] min-h-[100px] text-left">
                    {result.map((item) => {
                      return `[${item}]`;
                    })}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chunk;
