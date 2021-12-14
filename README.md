## Description

**_TodosSite_** is a website allow registered user to create their own todo list, also allow the user to change the task or delete it.

## User Stories

- **Register** As an anon i can register in the website so that I can create my own todo list
- **Login** As a user i can login to in the website so that I can create my own todo list
- **Logout** As a user i can logout from the website so no one else can use it
- **Forget Password** As a user if i forget password i can get reset password link to my email
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

| Path         | Component | Permissions                | Behavior                                                                   |
| ------------ | --------- | -------------------------- | -------------------------------------------------------------------------- |
| `/`          | n/a       | public `<Route>`           | Home page                                                                  |
| `/register`  | Register  | anon only `<AnonRoute>`    | Register form, link to login, navigate to log in page after register       |
| `/Resetpass` | Resetpass | user only `<AnonRoute>`    | reset password link , link to login,navigate to log in page after register |
| `/login`     | Login     | anon only `<AnonRoute>`    | Login form, link to register, navigate to homepage after login             |
| `/myPosts`   | MyPosr    | user only `<PrivateRoute>` | Shows user his posts                                                       |
| `/allPosts`  | AllPosts  | user only `<PrivateRoute>` | Shows other users posts                                                    |

## Components

- Header
- LeftSide
- RightSide
- AddPost
- Comments
- DeleteComment
- LikeButton
- LogWithGoogle
- PostsCard
- UpdateComment

## Reducers

- Account Reducer
  - login(user, userId, role, token)
  - logout()

## Diagrams

### UML Diagrams

 <img src="./public/UML.png" alt="UML Diagram" style="zoom:75%;" />

# Server / Backend

## Models

comments model

```
{
   desc: { type: String, required: true },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  ref: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Posts" },
  date: { type: Date, default: new Date() },
  isDel: { type: Boolean, default: false },
}
```

likes model

```
 {
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
  post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Posts" },

 }
```

posts model

```
 {
  imgUrl: { type: String },
  desc: { type: String, required: true },
  createrID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Likes",
    },
  ],
  isDel: { type: Boolean, default: false },
  date: { type: Date, default: new Date() },
 }
```

role model

```
 {
  role: { type: String, required: true },
  permissions: { type: Array, required: true },

 }
```

todos model

```
 {
  name: { type: String, required: true },
  isDel: { type: Boolean, default: false, required: true },
  ref: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

 }
```

user model

```
 {
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roles",
    default: "61a735c3931d13080ac69fef",
  },
  verified: { type: Boolean, default: false },
  isDel: { type: Boolean, default: false },
 }
```

## Backend routes

| HTTP Method | URL                         | Request Body                    | Success status | Error Status | Description                                                     |
| ----------- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- | --- |
| POST        | `/createRole`               | { role, permissions }           | 201            | 400          | create new role                                                 |
| GET         | `/getRole`                  | { name, email, password, role } | 200            | 400          | show all role in the database                                   |
| POST        | `/register`                 | {username, password}            | 201            | 401          | create new user                                                 |
| POST        | `/user/verify/:id`          | (empty)                         | 200            | 400          | verifying user account                                          |
| POST        | `/forgetPass`               | { email }                       | 200            | 400          | send reset password link to the user email                      |
| post        | `/setPass`                  | { newPassword }                 | 200            | 400          | reset user password to new password                             |
| post        | `/logIn`                    | { nameOrEmail, password }       | 200            | 400, 404     | check if user is exists then return token with user information |
| GET         | `/auth/google`              | (empty)                         |                |              | authenticate a user using his google account                    |
| GET         | `/logout`                   | (empty)                         | 200            |              | remove google session                                           |
| GET         | `/allUsers`                 | (empty)                         | 200            | 400          | show all users to the admin                                     |
| DELETE      | `/users/:id`                | (empty)                         | 200            | 400          | delete a user by admin                                          |
| POST        | `/posts/create`             | { desc}                         | 201            | 400          | create new post                                                 |
| GET         | `/posts/userPosts`          | (empty)                         | 200            | 400          | get all to the creator                                          |
| PUT         | `/posts/update`             | { postId, imgUrl, desc }        | 200            | 400          | allow user to update their post                                 |
| DELETE      | `/posts/:postId`            | { postId }                      | 200            | 400          | allow creator of the post or the admin to delete the post       |
| GET         | `/posts/allPosts`           | (empty)                         | 200            | 400          | show all posts to the user                                      |
| POST        | `/posts/like`               | { postId }                      | 201, 200       | 400          | give or remove the like for a post                              |
| POST        | `/posts/checkLike`          | (empty)                         | 200            | 400          | check if the user like the post or not                          |
| POST        | `/comments/create`          | { desc, ref }                   | 201            | 400          | create new comments                                             |
| GET         | `/comments/forPost/:postId` | (empty)                         | 200            | 400          | get post comments                                               |
| PUT         | `/comments/`                | { commentId, newDesc }          | 200            | 404,400      | update comments                                                 |
| DELETE      | `/comments/:commentId`      | (empty)                         | 200            | 400          | delete comments                                                 |     |

# Links

## GitHub

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Mohammed-Almuziny/w09d05)

[Server repository Link](https://github.com/Mohammed-Almuziny/W08D04)

[Deployed App Link](http://heroku.com/)
