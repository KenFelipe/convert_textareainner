const clip = () => {
    const outputField = document.getElementById('output-field')

    outputField.select()
    document.execCommand("copy")
}