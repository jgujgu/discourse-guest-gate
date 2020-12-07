import { on } from "ember-addons/ember-computed-decorators";
import DiscourseModal from "discourse/components/d-modal";

export default DiscourseModal.extend({
  classNameBindings: [':gate'],
  attributeBindings: ['data-keyboard'],

  dismissable: false,
  'data-keyboard': 'true',

  @on("didInsertElement")
  setUp() {
    this.appEvents.on('modal:body-shown', data => {
      if (data.title) {
        this.set('title', I18n.t(data.title));
      }
      $('html').addClass('gg-active');
      this._modalBodyShown(data);
    });
    this.appEvents.on('modal:body-dismissed', data => {
      $('html').removeClass('gg-active');
    });

    $('html').on('keydown.discourse-modal', e => {
      if ((e.which === 27) && $('.modal-header a.close').is(":visible")) {
        Em.run.next(() => $('.modal-header a.close').click());
      }
    });
  },

  click(e) {
    const $target = $(e.target);
    if (($target.hasClass("modal-middle-container") ||
        $target.hasClass("modal-outer-container")) &&
	$('.modal-header a.close').is(":visible")) {
      // Delegate click to modal close if clicked outside.
      // We do this because some CSS of ours seems to cover
      // the backdrop and makes it unclickable.
      $('.modal-header a.close').click();
    }
  }
});
