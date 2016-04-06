import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    // update(question, params) {
    //   Object.keys(params).forEach(function(key) {
    //     if(params[key]!==undefined) {
    //       question.set(key,params[key]);
    //     }
    //   });
    //   console.log(question)
    //   question.save();
    //   this.transitionTo('index');
    // },
    //
    // destroyQuestion(question){
    //   if(confirm('Delete this question?')){
    //     var answer_deletions = question.get('answer').map(function(answer){
    //       return answer.destroyRecord();
    //     });
    //     Ember.RSVP.all(answer_deletions).then(function(){
    //       return question.destroyRecord();
    //     });
    //     this.transitionTo('index');
    //   }
    // },

    saveAnswer3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;

      question.get('answer').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
