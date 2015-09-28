// Local variables

var streamsArray = [];
var usersArray = [];
var coders = ["freecodecamp", 
              "storbeck", 
              "terakilobyte",
              "brunofin",
              "habathcx", 
              "thomasballinger", 
              "noobs2ninjas", 
              "beohoff",
              "massansc",
              "kindafunnygames",
              "amazhs"
             ];

// make 2 arrays of json objects for each coder - userArray and streamArry
var getData = function (api, users, responseArray) {
    for (var i = 0; i < users.length; i++) {
        var request = new XMLHttpRequest();
        var url = 'https://api.twitch.tv/kraken/' + api + '/' + users[i];   

        request.open(
              'GET', 
              url, 
              false);    

        request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200 ) {
                var data = JSON.parse(request.responseText);
                console.log(data);
                responseArray.push(data);
            }
        };

          

        request.onerror = function() {
          console.log('connection error');
        };

        request.send();     
    }

};

getData('users', coders, usersArray);
getData('streams', coders, streamsArray);

// check if user is active

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i]._links.self === 'https://api.twitch.tv/kraken/streams/' + obj.name ) {
            return true;
        }
    }

    return false;
}

// Create HTML

var channelsHtml = '';
var statusHtml = document.createElement('span');
statusHtml.setAttribute('class', 'active');

function coderChannels(element, index, array) {
        channelsHtml += '<div class="user" id=' + element.name + '>';
        
    if (element.logo) {channelsHtml += '<img class="logo" src="' + encodeURI(element.logo) + '"';
                } else {channelsHtml += '<img class="logo" src="http://placehold.it/50x50"';}
    
        channelsHtml += ' alt="' + element.name + '">';
        channelsHtml += '<h2 class="name">' + element.display_name + '</h2>';
    
    if (element.bio) {channelsHtml += '<span class="bio">' + element.bio + '</span>';}
    
        channelsHtml += ' <span class="channel"><a href="http://twitch.tv/' + element.name + '">Home</a></span>';
     
    if (!containsObject(element, streamsArray)) {channelsHtml += '<p>This account is inactive :(</p>';}
    
        channelsHtml += '</div>';
        
};


function addChannelStatus(element, index, array) {
    if (element.stream !== null) {
        console.log(element.stream, element.stream.channel.name);
        statusHtml.innerHTML = '<img src="' + element.stream.preview.medium + '"><a href="http://twitch.tv/' + element.stream.channel.name  + '">Watch Now</a><p>' + element.stream.game + '<br/> Viewers: ' + element.stream.viewers + '</p>';
        document.getElementById(element.stream.channel.name).appendChild(statusHtml);  
    }
}; 

usersArray.forEach(coderChannels);
document.getElementById('coders').innerHTML = channelsHtml;
streamsArray.forEach(addChannelStatus);




