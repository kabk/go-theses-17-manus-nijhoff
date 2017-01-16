module.exports = function printOnly(){
  $('.print-only').fadeIn(10000, function(){
    $('.print-only .content').on('mouseover', function(){
      $(this).find('img').addClass('hover');
      $(this).find('p').addClass('hover');
    });

    $('.print-only .content').on('mouseout', function(){
      $(this).find('img').removeClass('hover');
      $(this).find('p').removeClass('hover');
    });

    $('.print-only .content').on('mousedown', function(){
      $(this).find('img').addClass('down');
      $(this).find('p').addClass('down');
    });

    $('.print-only .content').on('mouseup', function(){
      $(this).find('img').removeClass('down');
      $(this).find('p').removeClass('down');
    });

    $('.print-only').on('click', function(){
      window.print();
    });
  });
}