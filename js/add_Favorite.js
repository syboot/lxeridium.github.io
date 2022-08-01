/* JS Document */

/*

加入收藏失败，请使用Ctrl+D进行添加


*/
function addFavorite(sURL, sTitle) {
    try {
        // noinspection JSDeprecatedSymbols
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法自动完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}