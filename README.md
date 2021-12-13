## Description

**_TodosSite_** is a website allow registered user to create their own todo list, also allow the user to change the task or delete it.

## User Stories

- **Register** As an anon i can register in the website so that I can create my own todo list
- **Login** As a user i can login to in the website so that I can create my own todo list
- **Logout** As a user i can logout from the website so no one else can use it
- **Create post** As a user I can create an post
- **My Posts** As a user i can see my posts
- **All Posts** As a use i can see all posts of other users
- **Update Posts** As a user I can change my post
- **Delete Posts** As a user I can delete my post
- **Read Comments** As a user i can see any post comments
- **Create Comments** As a user I can give comments to a post
- **Update Comments** As a user I can change my comments
- **Delete Comments** As a user I can delete my comments
- **Admin** As an admin i can delete any posts or comments

# Client / Frontend

## React Router Routes (React App)

| Path        | Component | Permissions                | Behavior                                                             |
| ----------- | --------- | -------------------------- | -------------------------------------------------------------------- |
| `/`         | n/a       | public `<Route>`           | Home page                                                            |
| `/register` | Register  | anon only `<AnonRoute>`    | Register form, link to login, navigate to log in page after register |
| `/login`    | Login     | anon only `<AnonRoute>`    | Login form, link to register, navigate to homepage after login       |
| `/myPosts`  | MyPosr    | user only `<PrivateRoute>` | Shows user his posts                                                 |
| `/allPosts` | AllPosts  | user only `<PrivateRoute>` | Shows other users posts                                              |

## Components

- Header
- LeftSide
- RightSide
- AddPost
- Comments
- DeleteComment
- LikeButton
- PostsCard
- UpdateComment

## Reducers

- Account Reducer
  - login(user, userId, role, token)
  - logout()

## Diagrams

### UML Diagrams

 <img src="./public/UML.png" alt="UML Diagram" style="zoom:75%;" />

## GitHub Link

[repository Link](https://github.com/Mohammed-Almuziny/w09d05)
