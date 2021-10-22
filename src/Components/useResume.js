import Axios from 'axios';
import { useState } from 'react';

const useResume = () => {

    const [isDownloading, setIsDownloading] = useState(false);

    const downloadResume = () => {

        const resumeURL = 'https://firebasestorage.googleapis.com/v0/b/portfolio-d231d.appspot.com/o/marouane_edghoughi_resume.pdf?alt=media&token=14616c02-9eae-45d6-873b-a02f30dd2dba';

        Axios({
            method: "get",
            url: resumeURL,
            responseType: "arraybuffer"
        })
            .then((response) => {
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(
                new Blob([response.data], { type: "application/octet-stream" })
            );
            link.download = "marouane_edghoughi_resume.pdf";
        
            document.body.appendChild(link);
        
            link.click();

            setIsDownloading(true);
    
            setTimeout(function () {
                window.URL.revokeObjectURL(link);
                setIsDownloading(false);
            }, 200);
            })
            .catch((error) => {});
    }

    return {downloadResume, isDownloading}
}

export default useResume;