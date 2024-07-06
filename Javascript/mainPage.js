function search() {
    const icon= document.getElementById('icon');
    icon.style.display = "none"
    const inputField = document.createElement('div')
    inputField.innerHTML =
     `<input type= text class="search" placeholder="search product"/>
     <input type="submit" class="search submit">`;
}
