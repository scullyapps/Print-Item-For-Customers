const PrintDesc = () => {

    const handlePaste = (e) => {
        const inputValue = e.clipboardData.getData('Text')
        if(inputValue.includes('https://')){
            fetch('https://cors-anywhere.herokuapp.com/'+inputValue)
            .then(resp => resp.text())
            .then(htmlResponse => {
                handleParse(htmlResponse)
            })
        }else{
            //display error message
        }
    }

    const handleParse = (htmlResponse) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlResponse, "text/html");
        const images = doc.querySelectorAll('lslide')

        
    }

    return (
        <div className="text-center">
            <h1>Print Item Descriptions</h1>
            <input placeholder='Enter item link here' onPaste={handlePaste}/>

        </div>
    )
}

export default PrintDesc