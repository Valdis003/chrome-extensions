/**
 * Created by Valdis003 on 14.06.2017.
 */
window.onload = function () {
    document.getElementById('save').onclick = function () {
        var value = document.getElementById('saveLine').value;
        alert(value);

        chrome.storage.sync.set({"myLine": value}, function () {
            alert('succ');
        });
    };


    document.getElementById('get').onclick = function () {
        chrome.storage.sync.get('myLine', function (items) {
            console.log(items);
        });
    };
};
