/**
 * Created by tseian on 19/01/2017.
 */
function fileInfo(files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        console.log(file.name, file.type, file.lastModifiedDate);
    }
}


function readFile(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
        var out = document.getElementById('output');
        out.innerHTML = "";
        out.appendChild(document.createTextNode(reader.result))
    };
    reader.onerror = function (e) {
        console.log("Error", e);
    }
}

/**
 * 获取本地文件2016年年终总结.xmind
 * get local file
 */

function onInitFs(fs) {
    // window.requestFileSystem(window.TEMPORARY, 10 * 1024 * 1024, function (fs) {
    fs.root.getFile('/Users/tseian/Downloads/log.rtf ', {}, function (entry) {
        entry.file(function (file) {
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                console.log(reader.result);
            }
        })
    });
}

function errorHandler(e) {
    console.log(e);
}


var requestedBytes = 1024 * 1024 * 280;

navigator.webkitPersistentStorage.requestQuota(
    requestedBytes, function (grantedBytes) {
        window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

    }, function (e) {
        console.log('Error', e);
    });

var you = {};
while (you.isLife) {
    you.money.push(new Money());
    if (!you.girlFriend && you.gender == 1) {
        you.girlFriend = new GirlFriend();
    }
    if (!you.boyFriend && you.gender == 0) {
        you.boyFriend = new BoyFriend();
    }
    you.happiness.push(new Happy());
    you.isHealth = true;
    you.position++;
    you.business = '兴隆';
    you.isEverythingFine = true;
    // if (you.isTuhao && you.gender == 0) {
    //     if (!typeof you.boyFriend == 'object') {
    //         you.boyFriend = [];
    //     }
    //     you.boyFriend.push(new BoyFriend());
    // }
    // if (you.isTuhao && you.gender == 1) {
    //     if (!typeof you.girlFriend == 'object') {
    //         you.girlFriend = [];
    //     }
    //     you.girlFriend.push(new GirlFriend());
    // }
}