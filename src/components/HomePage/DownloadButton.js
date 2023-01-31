const DownloadButton = props => {
  const downloadFile = () => {
    window.location.href = "../../Portfolio/assets/CV.pdf"
  }
  return (
            <button onClick={downloadFile}  className='button'>View Resume</button>
  )
}
export default DownloadButton;