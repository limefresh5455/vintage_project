// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
// import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import property from './property'
import contact from './contact'
import content from './content'
import subContent from './subContent'
import ourTeam from './ourTeam'
import home from './home'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    property,
    castMember,
    crewMember,
    contact,
    content,
    subContent,
    ourTeam,
    home
  ]),
})
