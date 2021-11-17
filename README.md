# Payroll Backend App RestApi

---

## Routes for Department

### to create a department

- department/create :post :protected

```js
{
    deptname: String(*),
    depthod: String,
}
```

## to get all departments

- department/get-all :get :protected

## to get a single department

- department/get/:id: :get :protected

### to update a department

- department/update/:id: :patch :protected

```js
{
    deptname: String,
    depthod: String,
}
```

## to delete a single department

- department/delete/:id: :delete :protected

## Routes for Designation

### to create a designation

- designation/create :post :protected

```js
{
    designame: String(*),
}
```

## to get all designations

- designation/get-all :get :protected

## to get a single designation

- designation/get/:id: :get :protected

### to update a designation

- designation/update/:id: :patch :protected

```js
{
    designame: String,
}
```

## to delete a single designation

- designation/delete/:id: :delete :protected
