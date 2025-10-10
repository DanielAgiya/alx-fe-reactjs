import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
    alert("User registered successfully with Formik!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Formik Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="p-2 border rounded"
          />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
