import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik submitted:", values);
        }}
      >
        {() => (
          <Form>
            <div className="mb-3">
              <Field name="username" type="text" placeholder="Username" className="border p-2 w-full" />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-3">
              <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div className="mb-3">
              <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
