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
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },

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
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'video',
      title: 'Property Video',
      type: 'file',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'agent',
      title: 'Agent',
      type: 'document',
      icon,
      fields: [
        {
          name: 'agentsName',
          title: 'Agent`s Name',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'officePhone',
          title: 'OfficePhone',
          type: 'string',
        },
        {
          name: 'agentsMobile',
          title: 'Agent`s Mobile',
          type: 'string',
        },
      ]
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
