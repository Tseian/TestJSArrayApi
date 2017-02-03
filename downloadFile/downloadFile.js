/**
 * Created by tseian on 19/01/2017.
 */
function downloadFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'file';
    xhr.onload = function () {
        callback(xhr.response);
    };
    xhr.send();
}

downloadFile('https://raw.githubusercontent.com/racaljk/hosts/master/hosts', function (res) {
    console.log(res);
    var $textArea = document.getElementById('textId');
    $textArea.innerHTML(res);
});




