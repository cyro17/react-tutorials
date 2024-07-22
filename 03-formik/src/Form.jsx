import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  phNumbers: [""],
};

const handleSubmit = (values) => {
  console.log(values);
};
// USE VALIDATION SCHEMA INSTEAD

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) errors.name = "*required";
//   if (!values.email) errors.email = "*Required";
//   if (!values.channel) errors.channel = "*Required";

//   return errors;
// };

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
  channel: yup.string().required("Required"),
});

export default function FormComponent() {
  // const formik = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: handleSubmit,
  //   // validate: validate,
  //   validationSchema,
  // });

  // console.log("visited: ", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form action="" onSubmit={handleSubmit}>
          <div className="formContainer">
            <div className="formControl">
              <label htmlFor="name" id="nameLabel" className="label">
                Name
              </label>
              <Field type="text" id="name" name="name" />

              <ErrorMessage name="name" />
            </div>

            <div className="formControl">
              <label htmlFor="email" id="emailLabel" className="label">
                email
              </label>
              <Field type="email" id="email" name="email" />

              <ErrorMessage name="email" />
            </div>

            <div className="formControl">
              <label htmlFor="channel" id="channelLabel" className="label">
                Channel
              </label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>

            <div className="formControl">
              <label htmlFor="comments" id="commentsLabel" className="label">
                Comments
              </label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="channel" />
            </div>

            <div className="formControl">
              <label htmlFor="address">Address</label>
              <Field input="address" name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="formControl">
              <label htmlFor="phNumbers">Phone Numbers</label>
              <FieldArray name="phNumbers" id="phNumbers">
                {(props) => {
                  // console.log(props);
                  const { push, remove, form } = props;
                  const { phNumbers } = form.values;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => {
                        return (
                          <div key={index}>
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                            <Field name={`phNumbers[${index}]`} />
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div className="formControl">
              <input type="submit" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
