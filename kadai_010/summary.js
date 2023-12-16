$(function () {

    // 文字列「こんにちは！」を赤色にする
    $('#change-color').on('click', function () {
        $('#target').css('color', 'red');
    });

    // 文字列「こんにちは！」を「おやすみ！」に変更する
    $('#change-text').on('click', function () {
        $('#target').text('おやすみ！');
    });

    // 文字列をフェードアウト
    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
    });

    // 文字列をフェードイン
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });

});