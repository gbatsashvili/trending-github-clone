import { useLocation } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { FiltersSyled, FilterItem } from "./filters.styled";

const Filters = (): JSX.Element => {
  const location = useLocation();

  // fake datas
  const spokenLanguageOptions = [
    { value: "en", label: "English" },
    { value: "ge", label: "Germany" },
    { value: "uk", label: "United Kingdom" },
  ];

  const languageOptions = [
    { value: "js", label: "Javascript" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "java", label: "Java" },
  ];

  const dateRangeOptions = [
    { value: "today", label: "Today" },
    { value: "week", label: "This week" },
    { value: "month", label: "This month" },
  ];

  return (
    <FiltersSyled>
      {location.pathname === "/developers" ? null : (
        <FilterItem>
          <Dropdown
            triggerLabel="Spoken Language:"
            selectOptions={spokenLanguageOptions}
          />
        </FilterItem>
      )}
      <FilterItem>
        <Dropdown triggerLabel="Language:" selectOptions={languageOptions} />
      </FilterItem>
      <FilterItem>
        <Dropdown triggerLabel="Date range:" selectOptions={dateRangeOptions} />
      </FilterItem>
    </FiltersSyled>
  );
};

export default Filters;
