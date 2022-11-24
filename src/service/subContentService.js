import sanityClient from "../client"
import errors from "../helper/errors";
class subContentServices {

  async getSubContentData() {
    return sanityClient
      .fetch(`*[_type=="subContent"  && contentType == "about"]{
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

  async getSubOurteamData() {
    return sanityClient
      .fetch(`*[_type=="subContent"  && contentType == "team"]{
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

  async getSubManagementData() {
    return sanityClient
      .fetch(`*[_type=="subContent"  && contentType == "manage"]{
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
       propertyAddress,
       propertyType,
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }

}
export default subContentServices;