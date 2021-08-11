import React from "react";
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { Button, Input } from "components/common";
import { Error, Center, InputField } from "./styles";

const ContactForm = () => {
  const name_form_no = process.env.GATSBY_PORTFOLIO_NAME;
  const email_form_no = process.env.GATSBY_PORTFOLIO_EMAIL;
  const message_form_no = process.env.GATSBY_PORTFOLIO_MESSAGE;
  console.log(name_form_no)
  console.log(email_form_no)
  console.log(message_form_no)
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        recaptcha: "",
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Full name field is required"),
          email: Yup.string()
          .email("Invalid email")
          .required("Email field is required"),
          message: Yup.string().required("Message field is required"),
          recaptcha:
        process.env.NODE_ENV !== "development"
          ? Yup.string().required("Robots are not welcome yet!")
          : Yup.string(),
      })}
      onSubmit={async (
        { name, email, message },
          { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          await fetch(process.env.GATSBY_PORTFOLIO_GOOGLEFORM_URL, {
            method: "POST",
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `${name_form_no}=${encodeURIComponent(name)}&${email_form_no}=${encodeURIComponent(email)}&${message_form_no}=${encodeURIComponent(message)}`
          });
          setSubmitting(false);
          setFieldValue("success", true);
          setTimeout(() => resetForm(), 6000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue("success", false);
          alert("Something went wrong, please try again!");
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <InputField>
            <Input
              as={FastField}
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder="Full name*"
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name="name" />
          </InputField>
          <InputField>
            <Input
              id="email"
              aria-label="email"
              component="input"
              as={FastField}
              type="email"
              name="email"
              placeholder="Email*"
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name="email" />
          </InputField>
          <InputField>
            <Input
              as={FastField}
              component="textarea"
              aria-label="message"
              id="message"
              rows="8"
              type="text"
              name="message"
              placeholder="Message*"
              error={touched.message && errors.message}
            />
            <ErrorMessage component={Error} name="message" />
          </InputField>
          {values.name &&
              values.email &&
              values.message &&
              process.env.NODE_ENV !== "development" && (
                <InputField>
                  <FastField
                    component={Recaptcha}
                    sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                    name="recaptcha"
                    onChange={(value) => setFieldValue("recaptcha", value)}
                  />
                  <ErrorMessage component={Error} name="recaptcha" />
                </InputField>
              )}
          {values.success && (
            <InputField>
              <Center>
                <h4>
                  Your message has been successfully sent, I will get back to you
                  ASAP!
                </h4>
              </Center>
            </InputField>
          )}
          <Center>
            <Button secondary type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
