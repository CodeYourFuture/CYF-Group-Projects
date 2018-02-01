function loadApi() {
    function onLoad() {
        const postsInfo = JSON.parse(this.responseText);

        let html = '<div class="row">';
        postsInfo.forEach(function(post) {
            html += `<div class="col-sm-6 col-md-4">
                <div class="thumbnail repo-info">
                <div class="caption">
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                </div>
                </div>
            </div>`;
            // postsInfo += '<p>' + post.title + '</p> 

        });
        html += '</div>';

        const postInfoElement = document.getElementById('postsInfo');
        postInfoElement.innerHTML = html;
    }

    var urls = ['https://gentle-shelf-10701.herokuapp.com/api/posts', "https://node-express-2.herokuapp.com/api/posts", "https://node-express-22.herokuapp.com/api/posts","http://anthony-thuo2320.herokuapp.com/api/posts", "https://radiant-woodland-95511.herokuapp.com/api/posts", ];

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', onLoad);
    oReq.open('GET', urls);
    oReq.send();
}

var myButton = document.querySelector('#btnGetPosts');
myButton.addEventListener('click', loadApi);