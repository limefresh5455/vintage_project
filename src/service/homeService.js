import sanityClient from "../client"
import errors from "../helper/errors";
class homeServices {

  async gethomeData() {
    return sanityClient
      .fetch(`*[_type=="home"]{
        _id,
        heading,
       releaseDate,
       poster{
         asset->{
           _id,
          url
         },
         alt
       },
       message,
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }



}
export default homeServices;