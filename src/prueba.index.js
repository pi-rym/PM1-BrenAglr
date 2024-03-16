class ToDoList {
    constructor(){
        this.list = []
    };

    getList(){
        return this.list;
    };

    addItem(item){
        this.list.push(item);
    };

    deleteLastItem(){
        this.list.pop();
        return this.list;
    };
};

module.exports = ToDoList;