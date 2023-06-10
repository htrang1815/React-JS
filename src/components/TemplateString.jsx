import { useState } from "react";
import NavBar from "./NavBar";

function TemplateString() {
  const [fileContent, setFileContent] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [isShowContent, setIsShowContent] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const isObject = (value) => {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
  };

  const handleFileChange = (e) => {
    console.log("object0");
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      console.log(contents);

      if (isObject(JSON.parse(inputValue))) {
        const inputValueParseObj = JSON.parse(inputValue);

        let htmlReplaceStr = contents;
        const keys = Object.keys(inputValueParseObj);
        for (const key of keys) {
          const placeholder = `{{${key}}}`;
          const regex = new RegExp(placeholder, "g");
          htmlReplaceStr = htmlReplaceStr.replace(
            regex,
            inputValueParseObj[key]
          );
        }
        setFileContent(htmlReplaceStr);
      }
    };

    reader.readAsText(file);
  };

  const downloadTxTFile = (content) => {
    const element = document.createElement("a");
    // Tạo một đối tượng Blob từ nội dung text
    const file = new Blob([content], { type: "text/plain" });
    // Tạo một URL tạm thời cho Blob
    element.href = URL.createObjectURL(file);
    element.download = "output.txt";
    // Tạo một thẻ a ẩn để tải xuống file
    document.body.appendChild(element);
    // Hành động bấm vào thẻ a ân để tải xuống file
    element.click();
    // Xóa thẻ a ẩn đấy đi
    document.body.removeChild(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(inputValue);
    console.log(fileContent);
    if (fileContent) {
      setIsShowContent(true);
      const textContent = fileContent;
      downloadTxTFile(textContent);
    }
    // setInputValue("");
  };

  return (
    <div className="flex h-[100vh]">
      <NavBar></NavBar>
      <div className="bg-[#bbbb] w-full p-[50px] text-center">
        <h1 className="font-[700]">Covert JavaScript</h1>
        <div className="p-[50px] mt-[20px]">
          <div className="flex justify-center">
            <p className="mb-[50px]">
              Đầu vào: một file template, và các params, nội dung file và tên
              các param không cố định
              <br></br>
              Đầu ra: một file mới với nội dung là template và các params được
              truyền vào.
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
                    placeholder="Array params"
                    onChange={handleInputChange}
                    // value={inputValue}
                  />
                </div>
                <div className="flex w-full">
                  <span className="text-[20px] font-[500] w-[15%] inline-block">
                    Input :{" "}
                  </span>
                  <input
                    type="file"
                    className="w-[85%] min-h-[50px] px-[8px]"
                    onChange={handleFileChange}
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
                    {fileContent && isShowContent && (
                      <div>
                        <h2>File Content:</h2>
                        <pre>{fileContent}</pre>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateString;
