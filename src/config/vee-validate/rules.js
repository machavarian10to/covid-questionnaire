import { defineRule } from "vee-validate";

defineRule("required", (value, [field]) => {
  if (!value || !value.length) {
    return `${field}ს ველი სავალდებულოა`;
  }
  return true;
});

defineRule("min_max", (value, [field, min, max]) => {
  if (!value || !value.length) {
    return true;
  }

  if (value.length < min) {
    return `${field}ს ველი უნდა შედგებოდეს მინიმუმ ${min} სიმბოლოსგან`;
  }
  if (value.length > max) {
    return `${field}ს ველი უნდა შედგებოდეს მაქსიმუმ ${max} სიმბოლოსგან`;
  }
  return true;
});

defineRule("alpha", (value, [field]) => {
  if (!value || !value.length) {
    return true;
  }

  const regex = /^[A-Za-z]+$/;
  if (!regex.test(value)) {
    return `${field}ს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს`;
  }
  return true;
});

defineRule("email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  if (!value.includes("@")) {
    return "თქვენ მიერ შეყვანილი მეილი არასწორია";
  }
  return true;
});

defineRule("redberry_email", (value) => {
  if (!value || !value.length) {
    return true;
  }

  const regex = /^[A-Z0-9._%+-]+@redberry.ge/i;
  if (!regex.test(value)) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
