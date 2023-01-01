import Realm from "realm";

const TodoData = {
  name: 'TodoData',
  primaryKey: 'id',
  properties: {
    createTime: 'string',
    categoryType: 'int',
    id: 'string',
    content: 'string',
    day: 'int?',
    time: 'string?',
    priority: 'int?',
    checked: {type: 'bool', default: false},
  },
};

let realm = new Realm({
  schema: [TodoData],
});

export default realm;