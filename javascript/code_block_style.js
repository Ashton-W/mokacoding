// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    return $('code').each(function() {
      if ($(this).parent('p').first().html() === "<code>" + $(this).html() + "</code>") {
        return $(this).addClass('code-block');
      }
    });
  });

}).call(this);
