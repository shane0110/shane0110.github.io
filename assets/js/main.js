document.addEventListener("DOMContentLoaded", function() {
    // 取得 .ds-header 的高度
    var mastheadHeight = document.querySelector('.ds-header').offsetHeight;
    //console.log(mastheadHeight);

    // 設定 .ds-banner 和 .ds-main-section 的 margin-top
    document.querySelector('.ds-banner').style.marginTop = mastheadHeight + 'px';
    document.querySelector('.ds-main-section').style.marginTop = mastheadHeight + 'px';

    // 監聽 window 的 scroll 事件
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 10) {
            document.querySelector('.ds-header').classList.add('ds-fixed-header');
        } else {
            document.querySelector('.ds-header').classList.remove('ds-fixed-header');
        }
    });

    // 初始化時執行一次 scroll 檢查
    if (window.scrollY >= 10) {
        document.querySelector('.ds-header').classList.add('ds-fixed-header');
    } else {
        document.querySelector('.ds-header').classList.remove('ds-fixed-header');
    }
});
