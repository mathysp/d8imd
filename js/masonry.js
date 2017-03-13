/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Example drupal behavior
   */
  Drupal.behaviors.masonry = {
    attach: function (context, settings) {
      $('.view-frontpage .view-content', context).once('masonry').each(function () {
        $(this).masonry({
          columnWidth: 200,
          itemSelector: '.views-row'
        });
      });
    }
  };

})(jQuery, Drupal);
