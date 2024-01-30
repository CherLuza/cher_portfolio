
import '../styles/components/downloadbutton.sass'

const DownloadButton = () => {

    const onButtonClick = () => {
        const pdfUrl = "CV Cher Oliboni Luza.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl;
        link.download = "CV Cher Oliboni Luza.pdf"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }
    return (
        <>
            <center>
                <button onClick={onButtonClick} className="btn">
                    Download Currículo
                </button>
            </center>
        </>
    )
}
 
export default DownloadButton