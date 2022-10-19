import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  icon,
  fields: [
    {
      name: 'propertyName',
      title: 'Property Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'propertyName',
        maxLength: 100,
      },
    },
    {
      name: 'propertyAddress',
      title: 'Property Address',
      type: 'string',
    },
    // {
    //   name: 'overview',
    //   title: 'Overview',
    //   type: 'blockContent',
    // },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'date',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    },
    // {
    //   name: 'leaseProperty',
    //   title: 'Lease Property',
    //   type: 'datetime',
    // },
    
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options:{
        list:[
       {value:"sale",title:"For Sale"},
       {value:"lease",title:"For Lease"},
        ]
      }
    },

    
    
    
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'castMembers',
    //   title: 'Cast Members',
    //   type: 'array',
    //   of: [{type: 'castMember'}],
    // },
    // {
    //   name: 'crewMembers',
    //   title: 'Crew Members',
    //   type: 'array',
    //   of: [{type: 'crewMember'}],
    // },
  ],
  preview: {
    select: {
      title: 'propertyName',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
}
