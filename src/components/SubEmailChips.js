import React, { useState } from "react";

const SubEmailChips = ({ placeholder = "" }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function isValid(email) {
    let error = null;

    if (isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (!isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  }

  function isInList(email) {
    return items.includes(email);
  }

  function isEmail(email) {
    //eslint-disable-next-line
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Backspace" && items.length !== 0 && value === "") {
      handleDelete(items[items.length - 1]);
    }

    if (["Enter", "Tab", ",", " ", ";"].includes(evt.key)) {
      evt.preventDefault();

      let newValue = value.trim();

      if (newValue && isValid(newValue)) {
        setItems([...items, newValue]);
        setValue("");
      }
    }
  };

  const handleChange = (evt) => {
    setValue(evt.target.value);
    setError(null);
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handlePaste = (evt) => {
    evt.preventDefault();

    let paste = evt.clipboardData.getData("text");
    //eslint-disable-next-line
    let emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      let toBeAdded = emails.filter((email) => !isInList(email));

      setItems([...items, ...toBeAdded]);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row gap-2 items-start ${
          items.length !== 0 ? "items-start" : "items-center"
        } bg-white py-2 pr-4 pl-2`}
      >
        <div className="flex flex-col w-12">
          <p className="text-gray-500">{placeholder}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {items &&
            items.map((item, index) => (
              <div
                key={item}
                className="flex flex-row items-center gap-2 bg-white rounded-full px-4 border"
              >
                <p className="text-sm text-black">{item}</p>
                <svg
                  onClick={() => handleDelete(item)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          <input
            className="bg-white rounded-md px-2 text-black leading-tight focus:outline-none"
            type="text"
            value={value}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onPaste={handlePaste}
          />
        </div>
      </div>
      {error && (
        <p className="text-xs text-left pl-3 pt-1 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SubEmailChips;
