import { MdLocalMovies as icon } from 'react-icons/md'

export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    icon,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
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
            name: 'poster',
            title: 'Poster Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },


        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },



    ],
    preview: {
        select: {
            title: 'heading',
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
