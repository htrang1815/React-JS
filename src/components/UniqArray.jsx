import { useState } from "react";
import NavBar from "./NavBar";

const UniqArray = () => {
  const [arr, setArr] = useState("");
  const [result, setResult] = useState("");

  const handleArr = (e) => {
    setArr(e.target.value.split(","));
  };

  const handleUniqArr = () => {
    let newarr = arr.reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
    return newarr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = handleUniqArr();
    setResult(re.join(","));
  };

  return (
    <div className="flex">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div>
            <p className="mb-[50px]">
              Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị
              lặp trong mảng.
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

export default UniqArray;
