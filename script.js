let states = document.getElementById('states');
states.onchange = function() {
    //Joining a string 'state index' and adding it to the index of the selected dropdown form
    console.log('states index:' + states.selectedIndex);
    //Joining a string 'state index' and adding it to the TEXT value of the selected option
    console.log('states index:' + states.options[states.selectedIndex].text);
    //Gives the title to the specific image of selected state in console. 
    console.log('img/'+ states.value + '@2x.jpg');
    //changes the postcard background css 
    document.getElementById('postcard').style.backgroundImage = 'url(img/'+ states.value + '@2x.jpg)';
    //select the innerHTMl element with the ID of 'state-heading' and assign it the value of the selected state from the dropdown menu
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
    //changes the default message to Greetings from
    document.getElementById('greeting').innerHTML = 'Greetings from:'
}