import axios from 'axios'

const useDownload = () => {
    const downloadResume = (fileName, downloadLink) => {
        return new Promise((resolve, reject) => {
            axios.get('https:' + downloadLink, {
                headers: {
                    'Content-Type': 'application/pdf',
                },
                responseType: 'blob'
            })
            .then((response) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([response.data])
                )
                const link = document.createElement('a');
                link.href = url
                link.setAttribute(
                    'download',
                    fileName
                )
    
                // Append to html link element page
                document.body.appendChild(link)
    
                // Start download
                link.click()
    
                // Clean up and remove the link
                link.parentNode.removeChild(link)
            })
        })
    }

    return { downloadResume }
}

export default useDownload