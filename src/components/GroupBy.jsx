import { useState } from "react";
import NavBar from "./NavBar";

const GroupBy = () => {
  const [arr, setArr] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const handleArr = (e) => {
    setArr(e.target.value);
  };
  const handleKey = (e) => {
    setKey(e.target.value);
  };

  const uniqArrayObject = () => {
    console.log("key", key);
    // let newarr = arr.replace(/([a-z]+):/g, '"$1":');
    let newarr = JSON.parse(`[${arr}]`);
    console.log(newarr);
    let re = newarr.reduce((acc, currentValue) => {
      let groupKey = currentValue[key];
      console.log(groupKey);
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(currentValue);
      console.log(acc);
      return acc;
    }, {});
    console.log(re);
    return re;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let re = uniqArrayObject();
    setResult(JSON.stringify(re));
  };

  return (
    <div className="flex h-[100vh]">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div className="flex justify-center">
            <p className="mb-[50px]">
              Cho đầu vào là 1 collection ( array of object ), Viết một function
              để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ
              định.
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
                    onChange={handleKey}
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

export default GroupBy;
