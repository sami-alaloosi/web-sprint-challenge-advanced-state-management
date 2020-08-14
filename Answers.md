1. What problem does the context API help solve?

sharing state down a component tree. Similar to the solution that Redux and React-Redux libraries solve, this solution prevents prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

Reducers: specify how the application's state changes in response to actions sent to the store.

Store: holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.

it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a data repository available to all classes. Application state is stored in memory on the server and is faster than storing and retrieving information in a database

The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed

1. What is your favorite state management system you've learned and this sprint? Please explain why!


Redux maintains the state of an entire application in a single immutable state tree (object), which can't be changed directly. When something changes, a new object is created (using actions and reducers)