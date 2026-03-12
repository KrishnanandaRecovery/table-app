import React, { useCallback, useMemo, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

interface DropdownProps {
  dropDownValue: number;
  dropDownOptions: number[];
  dropDownOnClick: React.Dispatch<React.SetStateAction<number>>;
}

function Dropdown(props: DropdownProps) {
  const { dropDownValue, dropDownOnClick, dropDownOptions } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = useCallback(
    (option: number) => {
      dropDownOnClick(option);
      setIsOpen(false);
    },
    [dropDownOnClick],
  );
  const dropDownMenu = useMemo(() => {
    return dropDownOptions.map((option) => (
      <div
        key={option}
        onClick={() => handleOptionClick(option)}
        className="py-1 not-last:mb-1 not-last:border-b-2 not-last:border-b-gray-200 cursor-pointer"
      >
        {option}
      </div>
    ));
  }, [dropDownOptions]);

  return (
    <div className="relative inline-block">
      <div className="text-xs">Rows per page</div>
      <div
        className="py-2 px-4 border-3 border-gray-300 rounded cursor-pointer hover:bg-gray-100"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {dropDownValue}
        {isOpen ? (
          <FaCaretUp className="inline-block align-text-top" />
        ) : (
          <FaCaretDown className="inline-block align-text-top" />
        )}
      </div>
      {isOpen && (
        <div className="mt-1 p-2 rounded border-3 border-gray-300">
          {dropDownMenu}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
