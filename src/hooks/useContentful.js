import { createClient } from 'contentful';

const useContentful = () => {
    const client = createClient({
        space: 'q5eipxbf3ysq',
        accessToken: 'iUMIzTABeA3JBejuycXI3ZJOkx4A9SSnv_wz8d96ZQA',
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

    return { getProjects }
}

export default useContentful