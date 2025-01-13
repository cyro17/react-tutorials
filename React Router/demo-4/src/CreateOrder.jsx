import { Form, redirect } from "react-router-dom";

export default function CreateOrder(){
  return (
  <>
    <div>
      Create Order Page
    </div>
    <Form method="post" >
      <div className="form-control">
        <label htmlFor="name">First Name</label>
        <input
          type="text" 
          name="name"
          id="name"
          required
        />
      </div>
      <div>
        <label htmlFor="order">Order Name</label>
        <input
          type="text" 
          name="order"
          id="order"
          required
        />
      </div>
      <button type="submit">Order</button>
    </Form>
  </>
  )
};

export async function createOrderAction ({request}){
    const data = await request.formData();
    for(const value of data.values()) 
        console.log(value)
    return redirect('/order/new')
}

