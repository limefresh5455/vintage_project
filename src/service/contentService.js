import sanityClient from "../client"
import errors from "../helper/errors";
class contentServices {

  async getAboutContentData() {
    return sanityClient
      .fetch(`*[_type=="content"  && contentType == "team"]{
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

  async getOurteamData() {
    return sanityClient
      .fetch(`*[_type=="content"  && contentType == "team"]{
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

  async getManagementData() {
    return sanityClient
      .fetch(`*[_type=="content"  && contentType == "manage"]{
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
export default contentServices;