$(document).ready(function () {
    $(function () {
        // Запускаем инициализацию tooltip
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});