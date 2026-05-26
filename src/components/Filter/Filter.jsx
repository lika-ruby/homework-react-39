import { Label, Input } from "./Filter";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Filter
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search..."
      />
    </Label>
  );
};
