import { useState } from "react";
import NavBar from "./NavBar";

const SumAll = () => {
  const [arr, setArr] = useState("");
  const [result, setResult] = useState("");

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const sumAll = () => {
    let a = JSON.parse(`[${arr}]`);
    let result = a.reduce((newarr, cur) => {
      for (let key in cur) {
        if (!newarr[key]) {
          newarr[key] = 0;
        }
        newarr[key] += parseInt(cur[key], 0);
      }
      return newarr;
    }, {});
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = sumAll();
    console.log(re);
    setResult(JSON.stringify(re));
  };

  return (
    <div className="flex">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div className="flex justify-center">
            <p className="mb-[50px]">
              SumAll: Viết function để tính tổng giá trị của các key của các
              phần tử con trong mảng bất kỳ:
            </p>
          </div>
          <div className="py-[20px] px-[50px]">
            <form onSubmit={handleSubmit} className="flex justify-center">
              <div className="mb-[50px] flex flex-col w-[70%]">
                <div className="flex w-full">
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
                    {result}
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

export default SumAll;
