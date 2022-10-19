import sanityClient from "../client"
import errors from "../helper/errors";
class propertyServices {

  async getPropertyData() {
    return sanityClient
      .fetch(`*[_type=="property"]{
                      _id,
                     propertyName,
                     releaseDate,
                     poster{
                       asset->{
                         _id,
                        url
                       },
                       alt
                     },
                     propertyAddress,
                     propertyType 
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }

  async getLeasePropertyData() {
    return sanityClient
      .fetch(`*[_type=="property"  && propertyType == "lease"]{
                      _id,
                     propertyName,
                     releaseDate,
                     poster{
                       asset->{
                         _id,
                        url
                       },
                       alt
                     },
                     propertyAddress,
                     propertyType 
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }

  async getSalePropertyData() {
    return sanityClient
      .fetch(`*[_type=="property"  && propertyType == "sale"]{
                      _id,
                     propertyName,
                     releaseDate,
                     poster{
                       asset->{
                         _id,
                        url
                       },
                       alt
                     },
                     propertyAddress,
                     propertyType 
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }

  async getRecentPropertyData() {
    var myDate = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000));
    var dateString = new Date(myDate.getTime() - (myDate.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];
    return sanityClient
      .fetch(`*[_type=="property"]|order(_createdAt asc)[0..4]{
                      _id,
                     propertyName,
                     releaseDate,
                     poster{
                       asset->{
                         _id,
                        url
                       },
                       alt
                     },
                     propertyAddress,
                     propertyType 
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }


}


export default propertyServices;