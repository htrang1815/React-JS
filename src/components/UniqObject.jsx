import { useState } from "react";
import NavBar from "./NavBar";

const UniqObject = () => {
  const [arr, setArr] = useState("");
  const [result, setResult] = useState("");

  const handleArr = (e) => {
    setArr(e.target.value);
  };

  const uniqArrayObject = () => {
    let newarr = JSON.parse(`[${arr}]`);
    let arrKey = newarr.reduce((key, cur) => {
      for (const property in cur) {
        if (!key.includes(property)) {
          key.push(property);
          //   console.log(typeof cur);
        }
      }
    //   console.log(key);
      return key;
    }, []);
    // console.log(arrKey);
    // console.log(newarr);
    let uniObject = [newarr[0]];
    for (let i = 1; i < newarr.length; i++) {
      let count = 0;
      let a = newarr[i];
      for (let j = 0; j < uniObject.length; j++) {
        let b = uniObject[j];
        const check = arrKey.every((x) => {
          return a[x] === b[x];
        });
        if (check) {
          count++;
        }
      }
      if (count == 0) {
        uniObject = [...uniObject, newarr[i]];
      }
    }
    // console.log(uniObject);
    return uniObject;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
    const re = uniqArrayObject();


    setResult(
      re.map((item) => {
        console.log(JSON.stringify(item));
        let a = [];
        a.push(JSON.stringify(item));
        return a;
      })
    );
  };

  return (
    <div className="flex">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div className="flex justify-center">
            <p className="mb-[50px]">
              Cho một mảng các object đầu vào, viết một function để loại bỏ các
              phần tử bị lặp trong mảng.
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

export default UniqObject;
