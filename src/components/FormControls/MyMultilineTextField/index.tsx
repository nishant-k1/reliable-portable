import React from "react";
import { useField } from "formik";
import styles from "../../QuickQuote/styles.module.css";

const MyMultilineTextField = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  const { touched, error } = meta;
  const { setValue, setTouched, setError } = helpers;
  return (
    <>
      <textarea
        {...field}
        {...props}
        className={props.className}
        placeholder={label}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={() => {
          setTouched(true);
        }}
      />
      {touched && error ? (
        <div className={styles.error}>{`Required`}</div>
      ) : null}
    </>
  );
};

export default MyMultilineTextField;
