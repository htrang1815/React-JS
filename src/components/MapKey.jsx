import { useState } from "react";
import NavBar from "./NavBar";

const MapKey = () => {
  const [arr, setArr] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const handleArr = (e) => {
    setArr(e.target.value);
  };
  const handleKey = (e) => {
    setKey(e.target.value.split(","));
  };

  const mapKey = () => {
    let result = [];
    let newarr = JSON.parse(`[${arr}]`);
    console.log(newarr);
    console.log(key);
    newarr.map((x) => {
      let cur = {};
      for (let i = 0; i < newarr.length; i++) {
        cur[key[i]] = x[key[i]];
      }
      result.push(cur);
    });
    const re = result.filter((obj) =>
      Object.values(obj).every((val) => val !== undefined)
    );
    return re;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let re = mapKey();
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
              MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một
              function để trả ra một mảng các object theo thứ tự mảng các key.
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

export default MapKey;
