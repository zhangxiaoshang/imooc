{
    function loadImg(src) {
        return new Promise(function(resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }

            img.onerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs (imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    ]).then(showImgs)
}
