"use strict";

(function Accordion() {
  const triggers = document.querySelectorAll('[data-toggle="collapse"]');
  let activeToggle;

  triggers &&
  triggers.forEach(trigger => {
    trigger.collapseTarget = document.querySelector(
    trigger.hash || trigger.dataset.target);


    trigger.collapseTarget.dataset.parent &&
    trigger.collapseTarget.classList.contains("is-active") && (
    activeToggle = trigger);

    trigger.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggle(trigger);
    });

    // Remove height when end open transition
    trigger.collapseTarget.addEventListener("transitionend", ({ target }) => {
      if (!target.classList.contains("is-active")) return;

      target.style.height = null;
    });
  });

  function toggle(trigger) {
    if (trigger.collapseTarget.classList.contains("is-active")) {
      close(trigger);
      activeToggle = null;
    } else {
      activeToggle &&
      activeToggle.collapseTarget.dataset.parent &&
      close(activeToggle);

      trigger.collapseTarget.dataset.parent && (activeToggle = trigger);

      open(trigger);
    }
  }

  function close(trigger) {
    setHeight(trigger.collapseTarget);

    trigger.parentElement.classList.remove("is-active");
    trigger.classList.remove("is-active");
    trigger.collapseTarget.classList.remove("is-active");

    setTimeout(() => {
      trigger.collapseTarget.style.height = null;
    }, 0);
  }

  function open(trigger) {
    trigger.classList.add("is-active");
    trigger.parentElement.classList.add("is-active");

    setTimeout(() => {
      setHeight(trigger.collapseTarget);
      trigger.collapseTarget.classList.add("is-active");
    }, 0);
  }

  function setHeight(target) {
    target.style.height = target.scrollHeight + "px";
  }
})();

//This is for the contact form

 const form = document.querySelector('.contact-form');
const submitButton = document.querySelector('#send-email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameofMine = "Ramya Vengala";
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

 if (!name) {
  const nameErrorMessage = document.createElement('span');
  nameErrorMessage.classList.add('error-message');
  nameErrorMessage.textContent = 'Please enter your name';
  const nameField = document.querySelector('#name');
  nameField.parentElement.appendChild(nameErrorMessage);
  return;
}

if (!subject) {
  const subjectErrorMessage = document.createElement('span');
  subjectErrorMessage.classList.add('error-message');
  subjectErrorMessage.textContent = 'Please enter a subject';
  const subjectField = document.querySelector('#subject');
  subjectField.parentElement.appendChild(subjectErrorMessage);
  return;
}

if (!message) {
  const messageErrorMessage = document.createElement('span');
  messageErrorMessage.classList.add('error-message');
  messageErrorMessage.textContent = 'Please enter a message';
  const messageField = document.querySelector('#message');
  messageField.parentElement.appendChild(messageErrorMessage);
  return;
}

// Validate the email address
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  const emailErrorMessage = document.createElement('span');
  emailErrorMessage.classList.add('error-message');
  emailErrorMessage.textContent = 'Please enter a valid email address';
  const emailField = document.querySelector('#email');
  emailField.parentElement.appendChild(emailErrorMessage);
  return;
}

window.alert("Form Submitted Successfully..!");
document.querySelectorAll('.error-message').forEach(element => element.remove());
form.reset();
});