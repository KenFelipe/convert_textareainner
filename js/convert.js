const convertTA = () => {
  // converter function
  const converterFn = converterFunction; // set in html <script /> tag

  const inputField = document.getElementById('input-field');
  const inputValue = inputField.value; // console.log(inputValue)
  // convert

  const tryConverter = (converterFn, inputValue) => {
    try {
      return converterFn(inputValue);
    } catch (error) {
      console.log('Error:', error);
      return 'Error';
    }
  };

  const valueConverted = tryConverter(converterFn, inputValue); // out 

  const outputField = document.getElementById('output-field'); // console.log(valueConverted)

  outputField.value = valueConverted;
};