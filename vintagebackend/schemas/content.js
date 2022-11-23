import { MdLocalMovies as icon } from 'react-icons/md'

export default {
  name: 'content',
  title: 'Content',
  type: 'document',
  icon,
  fields: [

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'contentType',
        maxLength: 100,
      },
    },

    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },

    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { value: "about", title: "About Us" },
          { value: "manage", title: "Mangement" },
          { value: "team", title: "Our Team" },
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

  ],
  preview: {
    select: {
      title: 'contentType',
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
