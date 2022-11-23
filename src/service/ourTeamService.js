import sanityClient from "../client"
import errors from "../helper/errors";
class ourTeamServices {

  async getTeamContentData() {
    return sanityClient
      .fetch(`*[_type=="ourTeam"]{
        _id,
        fullName,
       releaseDate,
       poster{
         asset->{
           _id,
          url
         },
         alt
       },
       designation,
           }`).then(respon => {
        return respon
      }).catch(error => {
        new errors().handleError(error);
      })
  }



}
export default ourTeamServices;