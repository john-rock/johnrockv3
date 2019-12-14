import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/postLink"
import { graphql } from "gatsby"

import "../components/parts/form.css"
import Layout from "../components/layout"

import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>
        Interested in workding together, have a question about a portfolio
        piece, or found a bug on this site that needs to be fixed? Use the form
        below to reach out.
      </p>
      <form
        name="contact"
        id="contact_form"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div class="name">
          <label for="name"></label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name_input"
            required
          />
        </div>
        <div class="email">
          <label for="email"></label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email_input"
            required
          />
        </div>
        {/* <div class="telephone">
      <label for="name"></label>
      <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required />
    </div> */}
        <div class="message">
          <label for="message"></label>
          <textarea
            name="message"
            placeholder="Message"
            id="message_input"
            cols="30"
            rows="5"
            required
          ></textarea>
        </div>
        <div class="submit">
          <input type="submit" value="Send Message" id="form_button" />
        </div>
      </form>
    </Layout>
  )
}

export default Contact
