Template.home.rendered = function() {
  var mainContext = Engine.createContext();

  var contentView = new Scrollview();

  var content = new Surface({
    size: [undefined, true],
    content: UI.render(Template.homecontent).render().toHTML()
  });

  content.pipe(contentView);
  contentView.sequenceFrom([content]);

  mainContext.add(contentView);

  // FIXME. size: [undefined, true] is borked in ScrollViews,
  // so we have to hack around it a bit.
  Meteor.setTimeout(function() {
    var h = $('.famous-container .container')[0].scrollHeight;
    content.setSize([undefined, h]);
  }, 100);
};
