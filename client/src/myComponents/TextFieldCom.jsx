import React from "react";
import { useField, ErrorMessage } from "formik";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";

export const TextFieldCom = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    // <TextField fullWidth required label={label} className="my-2">
    //   <input
    //     className={`form-control shadow-none ${
    //       meta.touched && meta.error && "is-invalid"
    //     }`}
    //     {...field}
    //     {...props}
    //     autoComplete="off"
    //   />
    //   <ErrorMessage name={field.name} />
    // </TextField>
    <div>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};
