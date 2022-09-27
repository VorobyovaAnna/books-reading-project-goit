export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;

export const getFilterContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  if (filter.length === 0 || !contacts) {
    return contacts;
  }
  return contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
