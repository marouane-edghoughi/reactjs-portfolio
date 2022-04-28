import { createClient } from 'contentful';
import config from '../privatekeys';

const useContentful = () => {
    const client = createClient({
        space: config.SPACE,
        accessToken: config.ACCESS_TOKEN,
        host: 'cdn.contentful.com'
    })

    const getProjects = () => {
        try {
            const projects = client.getEntries({
                content_type: 'project',
                select: 'fields'
            })

            const sanitizedProjects = projects.then((entries) => {
                return entries.items.map((entry) => {
                    const image = entry.fields.image.fields.file.url

                    return {
                        ...entry.fields,
                        image
                    }
                })
            })

            return sanitizedProjects
        } catch(error) {
            console.log('Error fetching projects: ' + error)
        }
    }

    const getAuthor = () => {
        try {
            // Change the getEntry parameter to your entry ID
            const author = client.getEntry('2mxFgFILnIudZ5HEkQXjwY')
                .then((entry) => {
                    const avatar = entry.fields.avatar.fields.file
                    const resume = entry.fields.resume.fields.file

                    return {
                        ...entry.fields,
                        avatar,
                        resume
                    }

                })

            return author
        } catch(error) {
            console.log('Error fetching author: ' + error)
        }
    }

    return { getProjects, getAuthor }
}

export default useContentful