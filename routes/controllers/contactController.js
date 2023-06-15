// GET Contact

const getContacts = (req, res) => {
  res.status(200).json({ message: " get ALL contacts" });
};

const postContact = (req, res) => {
  res.status(200).json({ message: "post req contacts" });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `UPdate req contacts ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `DElete req contacts ${req.params.id}` });
};

module.exports = { getContacts, postContact, updateContact, deleteContact };
