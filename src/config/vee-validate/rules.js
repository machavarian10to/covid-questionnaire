import { defineRule } from "vee-validate";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return false;
  }
  return true;
});

defineRule("min", (value, [min]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < min) {
    return false;
  }
  return true;
});

defineRule("max", (value, [max]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length > max) {
    return false;
  }
  return true;
});

defineRule("alpha", (value) => {
  if (!value || !value.length) {
    return true;
  }

  const regex = /^[A-Za-z]+$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
});

defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!value.includes("@")) {
    return false;
  }
  return true;
});

defineRule("redberry_email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  const regex = /^[A-Z0-9._%+-]+@redberry.ge/i;
  if (!regex.test(value)) {
    return false;
  }
  return true;
});
