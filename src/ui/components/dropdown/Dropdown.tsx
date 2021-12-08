import {
  DropdownStyled,
  SelectTrigger,
  SelectWrapper,
} from "./dropdown.styled";
import Select from "react-select";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export interface IDropdownTypes {
  triggerLabel: string;
  selectOptions: Array<any>;
}

const Dropdown = (props: IDropdownTypes): JSX.Element => {
  const { triggerLabel, selectOptions } = props;
  const [isOpen, setIsOpen] = useState(false);

  const container: any = useRef();

  const toggleSelect = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (container.current && !container.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });

  return (
    <DropdownStyled onClick={toggleSelect} ref={container}>
      <SelectTrigger>{triggerLabel}</SelectTrigger>
      <SelectWrapper>
        <Select
          menuIsOpen={isOpen}
          placeholder="Any"
          isSearchable={false}
          classNamePrefix="react-custom-select"
          options={selectOptions}
        />
      </SelectWrapper>
    </DropdownStyled>
  );
};

export default Dropdown;
