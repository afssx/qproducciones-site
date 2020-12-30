import React, { useState } from "react"
// import axios from "axios"
import "./contact.css"
// import { Link } from "gatsby"
import Layout from "../components/layout"
const MyForm = () => (
  <section id="contact">
    <h1 class="section-header">CONTACTO</h1>
    <div class="contact-wrapper">
      <form
        class="form-horizontal"
        method="post"
        action="contact.php"
      >
        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nombre"
              name="name"
              value=""
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="EMAIL"
              name="email"
              value=""
            />
            >
          </div>
        </div>
        <textarea
          class="form-control"
          rows="10"
          placeholder="MESSAGE"
          name="message"
        ></textarea>
        <button
          class="btn btn-primary send-button"
          id="submit"
          type="submit"
          value="SEND"
        >
          <div class="button">
            <i class="fa fa-paper-plane"></i>
            <span class="send-text">Enviar</span>
          </div>
        </button>
      </form>
      <div class="direct-contact-container">
        <ul class="contact-list">
          <li class="list-item">
            <i class="fa fa-map-marker fa-2x">
              <span class="contact-text place">Seattle | WA</span>
            </i>
          </li>
          <li class="list-item">
            <i class="fa fa-phone fa-2x">
              <span class="contact-text phone">
                <a href="tel:1-212-555-5555" title="Give me a call">
                  (212) 555-2368
                </a>
              </span>
            </i>
          </li>
          <li class="list-item">
            <i class="fa fa-envelope fa-2x">
              <span class="contact-text gmail">
                <a href="mailto:#" title="Send me an email">
                  emailme@gmail.com
                </a>
              </span>
            </i>
          </li>
        </ul>
        <hr />
        <ul class="social-media-list">
          {/* <li>
            <a href="" target="_blank" class="contact-icon">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank" class="contact-icon">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li> */}
          <li>
            <a href="https://instagram.com/qproducciones.co" class="contact-icon">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          {/* <li>
            <a href="" target="_blank" class="contact-icon">
              <i class="fa fa-codepen" aria-hidden="true"></i>
            </a>
          </li> */}
        </ul>
        <hr />
        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </div>
  </section>
)

export default MyForm
