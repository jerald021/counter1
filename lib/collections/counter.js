Counter = new Mongo.Collection('counter');

Counter.allow({
    update: function(userId){
        return !!userId;
    },
    insert: function(userId){   //userId ha de estar logueado   // doc el documento es propiedad del user
        return true;
    }
});

//metodo del contador
Meteor.methods({
    'modificarValor': function(id, valorNuevo){
        Counter.update(id, {$inc: {value: valorNuevo} });
    },
    'resetValor': function(id, valorNuevo){
        Counter.update(id, {$set: {value: valorNuevo} });
    }
});
