function getComments() {
    var videoId = document.getElementById('videoId').value;
    var DEVELOPER_KEY = "AIzaSyBV0Nc8Vi06i7AYhMZzvWQyVMl09zs-ld8"; // Replace with your YouTube Data API key

    var apiUrl = "https://www.googleapis.com/youtube/v3/commentThreads";
    apiUrl += "?part=snippet&videoId=" + videoId + "&maxResults=100&key=" + DEVELOPER_KEY;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayComments(data.items);
        })
        .catch(error => console.error('Error:', error));
}


function displayComments(comments) {
    var commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';

    comments.forEach(comment => {
        var text = comment.snippet.topLevelComment.snippet.textDisplay;
        var commentElement = document.createElement('p');
        commentElement.textContent = text;
        commentsDiv.appendChild(commentElement);
    });
}