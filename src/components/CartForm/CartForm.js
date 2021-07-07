import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./CartForm.module.scss";

const CartForm = reduxForm({
  form: "order",
})(ReduxCartForm);

function ReduxCartForm(props) {
  return (
    <form className={styles.formContainer} onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={styles.input}
          name={"name"}
          placeholder={"Name"}
          component={"input"}
        />
      </div>
      <div>
        <Field
          className={styles.input}
          name={"surname"}
          placeholder={"Surname"}
          component={"input"}
        />
      </div>
      <div>
        <Field
          className={styles.input}
          name={"adress"}
          placeholder={"Adress"}
          component={"input"}
        />
      </div>
      <div>
        <Field
          className={styles.input}
          name={"phone"}
          placeholder={"Phone"}
          component={"input"}
        />
      </div>
      <button className={styles.button}>Order</button>
    </form>
  );
}

export default CartForm;
