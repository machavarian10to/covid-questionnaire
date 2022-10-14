import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json ";

configure({
  generateMessage: localize({
    en,
  }),
});

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: "ეს ველი სავალდებულოა",
        min: "ეს ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან",
        max: "ეს ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან",
        alpha: "ეს ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს",
        email: "თქვენ მიერ შეყვანილი მეილი არასწორია",
        redberry_email:
          "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)",
      },
    },
  }),
});
