-- name: GetUser :one
SELECT *
FROM users
WHERE id = $1
LIMIT 1;

-- name: ListUsers :many
SELECT *
FROM users
ORDER BY name;

-- name: CreateUser :one
INSERT INTO users (name)
VALUES ($1)
RETURNING *;

-- name: DeleteUser :one
DELETE
FROM users
WHERE id = $1
RETURNING *;

-- name: GetTodo :one
SELECT *
FROM todos
WHERE id = $1;

-- name: ListTodos :many
SELECT *
FROM todos
ORDER BY id;


-- name: CreateTodo :one
INSERT INTO todos (title, completed, user_id)
VALUES ($1, $2, $3)
RETURNING *;

-- name: DeleteTodo :one
DELETE
FROM todos
WHERE id = $1
RETURNING *;

-- name: SetCompletedTodo :one
UPDATE todos
SET completed = $1
WHERE id = $2
RETURNING *;