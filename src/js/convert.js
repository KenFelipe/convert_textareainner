const convertTA = () => {
    // parse function
    const parseFn = parseFunction // set in html <script /> tag


    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value
    // console.log(inputValue)

    // convert
    const tryParse = (parseFn, inputValue) => {
        try {
            return parseFn(inputValue)
        } catch (error) {
            console.log('Error:', error)
            return 'Error'
        }
    }
    const valueConverted = tryParse(parseFn, inputValue)

    // out 
    const outputField = document.getElementById('output-field')

    // console.log(valueConverted)
    outputField.value = valueConverted 
}
