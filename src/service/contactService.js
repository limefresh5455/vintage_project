import sanityClient from "../client.js";

class contactService {
  async createContact(formData) {
    if (formData) {
      return sanityClient.create({
        _type: 'contact',
        fullName: formData.fullName,
        message: formData.message,
        contact: formData.contact,
      }).then((res) => console.log(res)).catch((err) => { return "Error" });
    }
  }
}
export default contactService;