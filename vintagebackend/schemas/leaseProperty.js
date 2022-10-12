import {UserIcon} from '@sanity/icons'

export default {
  name: 'leaseProperty',
  title: 'Lease Property',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Poperty Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'address',
      title: 'Poperty Address',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
