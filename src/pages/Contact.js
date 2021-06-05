import React from "react";
import { Layout } from "../layout";

const Contact = () => (
  <Layout>
      <h1>Contact Page</h1>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
          <label>Message:</label>
        <textarea></textarea>
      </div>
    </form>
  </Layout>
);

export default Contact;
