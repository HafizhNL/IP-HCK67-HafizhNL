## Models

### User

```md
- userName: string, required
- email: string, required, unique, isEmail
- password: string, required
```

### Category

```md
- name: string 
```

### Product

```md
- name: string, required
- imgUrl: string, required
- memory: string, required
- storage: string, required
- batteryCapacity: string, required
- description: string, required
- price: integer, required
- CategoryId: integer, required
- UserId: integer, required
```

## Relation

Many to Many

## End Point

List of available endpoints:
- `POST /register`
- `POST /login`

List below dont need authentication:
- `GET /public/products`
- `GET /public/products/:id`

List below need authentication:
- `GET /products`
- `GET /products/:id`
- `POST /products/add`
- `DELETE /products/:id`
- `PUT /products/:id`
- `PATCH /products/:id/cover-url`
