import { useDispatch, useSelector } from "react-redux";
import { restoreContactsApi } from "../../redux/contacts/operations.js";
import { Button } from "./RestoreButton.js";
import { selectLastDeletedContact } from "../../redux/contacts/selectors.js";

export const RestoreButton = () => {
  const dispatch = useDispatch();
  const lastDeletedContact = useSelector(selectLastDeletedContact);

  const handleRestore = () => {
    if (lastDeletedContact) dispatch(restoreContactsApi(lastDeletedContact));
  };

  return (
    <Button onClick={handleRestore} id="restore-button" type="button">
      Restore last deleted contact
    </Button>
  );
};
