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
