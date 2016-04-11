Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'counter',
    waitOn: function(){
        return Meteor.subscribe('counter');
    }
});
