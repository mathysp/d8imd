/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Example drupal behavior
   */
  Drupal.behaviors.awesome = {
    attach: function (context, settings) {
      $('main', context).once('awesome').each(function () {
        alert('I\'m helping!');
      });
    }
  };

})(jQuery, Drupal);
