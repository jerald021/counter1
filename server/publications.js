Meteor.publish('counter', function(){
    return Counter.find();
});