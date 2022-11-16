import sanityClient from "../client.js";

class commentService {


  async createComments(formData) {
    if(formData){
      return sanityClient.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: formData._id,
        },
       name: formData.name,
       email: formData.email,
       comment: formData.comment,
      }).then((res) => { return "Success" }).catch((err) => { return "Error" });
    }
  }

}
export default commentService;