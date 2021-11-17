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

## Routes for Shift

### to create a shift

- shift/create :post :protected

```js
{
    shiftname: String(*),
}
```

## to get all shifts

- shift/get-all :get :protected

## to get a single shift

- shift/get/:id: :get :protected

### to update a shift

- shift/update/:id: :patch :protected

```js
{
    shiftname: String,
}
```

## to delete a single shift

- shift/delete/:id: :delete :protected

## Routes for Job

### to create a job

- job/create :post :protected

```js
{
    jobname: String(*),
}
```

## to get all jobs

- job/get-all :get :protected

## to get a single job

- job/get/:id: :get :protected

### to update a job

- job/update/:id: :patch :protected

```js
{
    jobname: String,
}
```

## to delete a single job

- job/delete/:id: :delete :protected
