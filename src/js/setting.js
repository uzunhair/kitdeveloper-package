import $ from 'jquery';

$(document).ready(() => {
  $(() => {
    // Запускаем инициализацию tooltip
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(() => {
    $('[data-toggle="popover"]').popover();
  });
});
