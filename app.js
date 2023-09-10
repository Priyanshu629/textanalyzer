document.getElementById('input').onkeyup=()=> {
    let input = document.getElementById('input').value

    let words = input.split(' ').length
    //    console.log(words)
    let char = input.length
    let vowel = 0, conso = 0, spaces = 0;
    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == 'a' || input.charAt(i) == 'e' || input.charAt(i) == 'i' || input.charAt(i) == 'o' || input.charAt(i) == 'u') {
            vowel++
        } else if (input.charAt(i) == ' ') {
            spaces++
        }
        else {
            conso++
        }

    }
    document.getElementById('words').innerHTML = words
    document.getElementById('char').innerHTML = char
    document.getElementById('vowels').innerHTML = vowel
    document.getElementById('conso').innerHTML = conso

}

document.getElementById('copy').onclick = () => {
    let input = document.getElementById('input').value

    if(input!=''){
        navigator.clipboard.writeText(input)
        alert('text copied to clipboard')
    }
   
}
document.getElementById('clear').onclick = () => {
    document.getElementById('input').value = ''
    document.getElementById('words').innerHTML = ''
    document.getElementById('char').innerHTML = ''
    document.getElementById('vowels').innerHTML = ''
    document.getElementById('conso').innerHTML = ''
}

function toggle(){
    if(document.body.style.backgroundColor=='aliceblue'){
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        document.getElementById('mode').innerHTML='Light Mode'
    }
    else{
        document.body.style.backgroundColor='aliceblue'
        document.body.style.color='black'
        document.getElementById('mode').innerHTML='Dark Mode'
    }
}