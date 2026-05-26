export const selectContacts = (state) => state.contacts;
export const selectFilter = (state) => state.filter;
export const selectFilteredContacts = (state) => {
    const contacts = selectContacts(state);
    const filterS = selectFilter(state);
    if (filterS) {
        return contacts.contacts.filter((cont) =>
            cont.name.toLowerCase().includes(filterS.toLowerCase())
        );
    } else {
        return contacts.contacts
    }
};

export const selectLastDeletedContact = (state) => state.contacts.lastDeletedContact
