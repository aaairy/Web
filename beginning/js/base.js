$(function() {
  /********************************************************************/
  /*// ローディング画面のdivを取得
  var showloading = document.getElementById('showloading');
  // ローディング完了時に表示する画像のdivを取得
  var loaded = document.getElementById('showimage');
  // 画面本体のdivを取得
  var contents = document.getElementById('contents');
  // 読み込みが終わらない場合はクリックすると開く
  showloading.click(function() {
    // ロード完了した画像をフェードイン
    loaded.fadeIn(1500);
    loaded.fadeOut(1000);
    showloading.style.display = 'none';
    loaded.style.display = 'none';
    contents.classList.remove('hidden');
  });
  // 読み込みが完了したら発動
  window.addEventListener('load', function () {
    // loadingのdivを非表示に
    showloading.style.display = 'none';
    loaded.style.display = 'none';
    // contentsのdivを表示
    contents.classList.remove('hidden');
  });*/
  /********************************************************************/
  // ページトップボタン処理
  var pagetop = $('#pagetop');   
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 800);
        return false;
  });
  /********************************************************************/
  // 趣味紹介ページのアコーディオン表示処理
  $(".list dt").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });
  /********************************************************************/
  // Favoriteの奇数番目に表示される内容の表示位置
  $('.west').darkTooltip({
    animation:'fadeIn',
    gravity:'west',
    theme:'dark',
    trigger:'click',
    size:'large',
  });
  // Favoriteの偶数番目に表示される内容の表示位置
  $('.east').darkTooltip({
    animation:'fadeIn',
    gravity:'east',
    theme:'dark',
    trigger:'click',
    size:'large',
  });
  // ポートフォリオのツールチップ表示位置
  $('.tooltip').darkTooltip({
    animation:'fadeIn',
    gravity:'south',
    theme:'dark',
    trigger:'click hover',
    size:'large',
  });
  /********************************************************************/
  // PC画面のみでスマホでは処理されない
  if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $(function(){
      // 画面いっぱいに表示される処理
      $(".box").css({"height":$(window).height()});
      $.scrollify({
        section:".box",
        scrollSpeed: 600,
        scrollbars: true,
        setHeights:false,
      });
      // Favoriteの奇数番目に表示される内容の表示位置
      $('.west').darkTooltip({
        animation:'fadeIn',
        gravity:'west',
        theme:'dark',
        trigger:'hover',
        size:'large',
      });
      // Favoriteの偶数番目に表示される内容の表示位置
      $('.east').darkTooltip({
        animation:'fadeIn',
        gravity:'east',
        theme:'dark',
        trigger:'hover',
        size:'large',
      });
    });
  }
  /********************************************************************/
  // フッターが見える位置まで移動したらヘッダーをフェードアウトさせる
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      footerHeight = $('footer').outerHeight(),
      docmentHeight = $(document).height(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed',
      hideClass = 'is-hide';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop(),
        scrollPos = $win.height() + value;

    if ( value > navPos ) {
      if ( docmentHeight - scrollPos < footerHeight ) {
        $nav.addClass(hideClass);
      } else {
        $nav.removeClass(hideClass);
      }
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });
});