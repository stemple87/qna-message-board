import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
});
