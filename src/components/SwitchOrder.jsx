import { useState } from "react";
import NavBar from "./NavBar";

const SwitchOrder = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState("");
  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };
  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const switchOrder = () => {
    // console.log(key);
    let a = num1;
    let b = num2;
    let i = 0;
    let j = 0;
    let arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    // let newarr = JSON.parse(`[${arr}]`);

    arr.map((x, index) => {
      if (x["id"] == a) {
        i = index;
      }
      if (x["order"] == b) {
        j = index;
      }
    });

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    arr.map((x, index) => {
      x["order"] = index;
    });
    console.log(arr);
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = switchOrder();
    console.log(re);
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
                    type="number"
                    className="w-[85%] min-h-[50px] px-[8px]"
                    placeholder="Number 1"
                    onChange={handleNum1}
                  />
                </div>
                <div className="flex w-full">
                  <span className="text-[20px] font-[500] w-[15%] inline-block">
                    Input :{" "}
                  </span>
                  <input
                    type="number"
                    className="w-[85%] min-h-[50px] px-[8px]"
                    placeholder="Number 2"
                    onChange={handleNum2}
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

export default SwitchOrder;
