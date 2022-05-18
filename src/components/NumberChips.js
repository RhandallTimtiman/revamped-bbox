import React, { useState } from "react";

const NumberChips = ({ placeholder = "" }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function isValid(number) {
    let error = null;

    if (isInList(number)) {
      error = `${number} has already been added.`;
    }

    if (!isNumber(number)) {
      error = `${number} is not a valid number.`;
    }

    if (error) {
      setError(error);

      return false;
    }

    return true;
  }

  function isInList(e) {
    return items.includes(e);
  }

  function isNumber(e) {
    //eslint-disable-next-line
    return /^[0-9]*$/.test(e);
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
    let numbers = paste.match();

    let toBeAdded = numbers.filter((number) => !isInList(number));

    setItems([...items, ...toBeAdded]);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-wrap gap-2 items-center bg-white rounded-md py-2 pr-4 border ${
          items.length ? "pl-2" : ""
        }`}
      >
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
          placeholder={items.length ? "" : placeholder}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onPaste={handlePaste}
        />
      </div>
      {error && (
        <p className="text-xs text-left pl-1 pt-1 text-red-500">{error}</p>
      )}
    </div>
  );
};

export default NumberChips;
