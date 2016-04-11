if (Counter.find().count() === 0){
    Counter.insert({
        name: 'contador1',
        value: 10
    });
    Counter.insert({
        name: 'contador2',
        value: 50
    });
    Counter.insert({
        name: 'contador3',
        value: 89
    });
}