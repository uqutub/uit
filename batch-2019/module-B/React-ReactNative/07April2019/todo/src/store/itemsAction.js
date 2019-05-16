
export class ItemsAction {

    static ADD_ITEM = 'ADD_ITEM';

    static saveTodo(todos) {
        return {
            type: ItemsAction.ADD_ITEM,
            payload: todos
        }
    }

}