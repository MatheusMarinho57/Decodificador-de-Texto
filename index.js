const textArea = document.querySelector('#typehere');
const output = document.querySelector('#output-area');
const clipboardButton = document.querySelector('#btn-clip')

const btnCriptograph = () => {
  let showCriptograph = criptograph(textArea.value);
  output.value = showCriptograph;
  textArea.value = '';
  clipboardButton.style.display = 'block';
}

const criptograph = (string) => {
  let strCrip = [['e', 'enter'] , ['i', 'imes'] ,['a','ai'], ['o','ober'] , ['u', 'ufat']];
  string = string.toLowerCase();

  for(let i = 0; i < strCrip.length; i++) {
    if(string.includes(strCrip[i][0])) {
      string = string.replaceAll(strCrip[i][0], strCrip[i][1]);
    }
  }
  return string;
}

const btnDescriptograph = () => {
  let showDescriptograph = descriptograph(textArea.value);
  output.value = showDescriptograph;
  textArea.value = '';
  clipboardButton.style.display = 'block';
}

const descriptograph = (string) => {
  let strDesc = [['e', 'enter'] , ['i', 'imes'] ,['a','ai'], ['o','ober'] , ['u', 'ufat']];
  string = string.toLowerCase();

  for(let i = 0; i < strDesc.length; i++) {
    if(string.includes(strDesc[i][1])) {
      string = string.replaceAll(strDesc[i][1], strDesc[i][0]);
    }
  }
  return string;
}
const copyToClipboard =  () => {
  navigator.clipboard.writeText(output.value);
}