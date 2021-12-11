## Description

**_TodosSite_** is a website allow registered user to create their own todo list, also allow the user to change the task or delete it.

## User Stories

- **Register:** As an anon I can register in the website so that I can create my own todo list
- **Login:** As a user I can login to in the website so that I can create my own todo list
- **Logout:** As a user I can logout from the website so no one else can use it
- **Add Todo** As a user I can add an task to my todo list
- **change my todo** As a user I can change my task name
- **delete todo task** As a user I can delete one of my todo task
- **detele other user todos** As an admin I can see all users todo then i can delete any one of them
- **detele other user** As an a I admin I can see all users then i can delete any one of them

# Client / Frontend

## React Router Routes (React App)

| Path        | Component | Permissions                 | Behavior                                                             |
| ----------- | --------- | --------------------------- | -------------------------------------------------------------------- |
| `/`         | n/a       | public `<Route>`            | Home page                                                            |
| `/register` | Register  | anon only `<AnonRoute>`     | Register form, link to login, navigate to log in page after register |
| `/login`    | Login     | anon only `<AnonRoute>`     | Login form, link to register, navigate to homepage after login       |
| `/todos`    | Todos     | user only `<PrivateRoute>`  | Shows user todo list                                                 |
| `/allTodos` | AllTodos  | admin only `<PrivateRoute>` | Shows other users todo list                                          |
| `/allUsers` | AllUsers  | admin only `<PrivateRoute>` | Shows other users todo list                                          |

## Components

- Header
- LeftSide
- RightSide
- AddTodo
- TodoCard
- UserCard
- AllTodos
- AllUsers
- Login
- Register
- Todos

## Reducers

- Account Reducer
  - login(user, role, token)
  - logout()
- Tasks Resucer
  - set(todos)
- Users reducer
  - setUsers(usersList)

## Diagrams

### UML Diagrams

 <img src="./public/UML.png" alt="UML Diagram" style="zoom:75%;" />

## GitHub Link

[repository Link](https://github.com/Mohammed-Almuziny/w09d03)
