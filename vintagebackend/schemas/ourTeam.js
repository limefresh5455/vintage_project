import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'ourTeam',
  title: 'Team',
  type: 'document',
  icon,
  fields: [
    {
      name: 'fullName',
      title: 'Name Of Contact',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 100,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'officePhone',
      title: 'Office Phone',
      type: 'number',
    },
    {
      name: 'mobile',
      title: 'Mobile',
      type: 'number',
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
      title: 'fullName',
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
