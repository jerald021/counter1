Template.counter.helpers({
    //'counters': function () {
    //    return Counter.find();
    //}
    'counters': function () {
        counterFind= Counter.findOne({name: 'contador1'});
        return counterFind;
    }
});

Template.counter.events({
    'click #aumentar': function () {
        currentId =counterFind._id;
        Meteor.call('modificarValor', currentId, 1);
    },
    //'click #aumentar': function () {
    //    Counter.update(counterFind._id, {$inc: {value: 1} });
    //},
    'click #disminuir': function () {
        Meteor.call('modificarValor', currentId, -1);
    },
    //'click #disminuir': function () {
    //    Counter.update(counterFind._id, {$inc: {value: -1} });
    //},
    'click #reiniciar': function () {
        Meteor.call('resetValor', currentId, 0);
    },
    //'click #reiniciar': function () {
    //    Counter.update(counterFind._id, {$set: {value: 0} });
    //},

    //'click #insert': function () {
    //    Counter.insert({
    //        name: 'contador2',
    //        value: 50
    //    });
    //    Counter.insert({
    //        name: 'contador3',
    //        value: 89
    //    });
    //}
});