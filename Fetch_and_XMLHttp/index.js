const request_url = 'https://api.github.com/users/hiteshchoudhary' 
const xhr = new XMLHttpRequest();
xhr.open('GET', request_url)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.followers);
    }
} 
xhr.send();   


fetch(request_url)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
