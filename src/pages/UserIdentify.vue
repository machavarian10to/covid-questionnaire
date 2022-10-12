<template>
  <base-container page="1">
    <div>
      <Form @submit="redirect" v-slot="{ meta, errors }">
        <base-input label="სახელი*" title="name">
          <Field
            id="name"
            name="name"
            type="text"
            :rules="validateName"
            :class="inputStyling"
            :value="name"
            @input="changeName"
          />
          <p v-if="errors.name" class="text-error-color">
            {{ errors.name }}
          </p>
        </base-input>

        <base-input label="გვარი*" title="surname">
          <Field
            id="surname"
            name="surname"
            type="text"
            :rules="validateSurname"
            :class="inputStyling"
            :value="surname"
            @input="changeLastName"
          />
          <p v-if="errors.surname" class="text-error-color">
            {{ errors.surname }}
          </p>
        </base-input>

        <base-input label="მეილი*" title="email">
          <Field
            id="email"
            name="email"
            type="email"
            :rules="validateEmail"
            :class="inputStyling"
            :value="email"
            @input="changeEmail"
          />
          <p v-if="errors.email" class="text-error-color">
            {{ errors.email }}
          </p>
        </base-input>

        {{ checkIfUserIdentify(meta) }}
      </Form>

      <asterisk-tip></asterisk-tip>
    </div>

    <div>
      <base-background class="bg-identify-image"></base-background>

      <transition>
        <img
          v-if="showLogo"
          src="@/assets/yellow-bg.png"
          class="opacity-80 absolute top-[400px] right-[300px]"
        />
      </transition>

      <div class="flex justify-start">
        <base-button
          @click="redirect"
          :disabled="!userIdentified"
          :stroke="userIdentified"
        ></base-button>
      </div>
    </div>
  </base-container>
</template>

<script>
import { Field, Form } from "vee-validate";
import AsteriskTip from "../components/simplify/AsteriskTip.vue";
export default {
  data() {
    return {
      userIdentified: false,
      showLogo: false,
      regex: /^[A-Za-z]+$/,
      name: this.$store.getters.getName,
      surname: this.$store.getters.getLastName,
      email: this.$store.getters.getEmail,
    };
  },
  computed: {
    inputStyling() {
      return "w-[515px] h-[50px] border-[1px] border-border-color bg-transparent focus:outline-none indent-4 text-[18px] mt-3 mb-[40px]";
    },
  },
  mounted() {
    this.showLogo = true;
  },
  components: {
    Form,
    Field,
    AsteriskTip,
  },
  methods: {
    changeName(e) {
      this.$store.dispatch("changeName", { value: e.target.value });
    },
    changeLastName(e) {
      this.$store.dispatch("changeLastName", { value: e.target.value });
    },
    changeEmail(e) {
      this.$store.dispatch("changeEmail", { value: e.target.value });
    },
    validateName(value) {
      if (!value) {
        return "სახელის ველი სავალდებულოა";
      }

      if (value.length < 3) {
        return "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }

      if (!this.regex.test(value)) {
        return "სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }
      return true;
    },
    validateSurname(value) {
      if (!value) {
        return "გვარის ველი სავალდებულოა";
      }

      if (value.length < 3) {
        return "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
      }

      if (!this.regex.test(value)) {
        return "გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს";
      }

      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "მეილის ველი სავალდებულოა";
      }

      if (!value.includes("@")) {
        return "თქვენ მიერ შეყვანილი მეილი არასწორია";
      }

      const regex = /^[A-Z0-9._%+-]+@redberry.ge/i;
      if (!regex.test(value)) {
        return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
      }
      return true;
    },
    checkIfUserIdentify(meta) {
      meta.valid ? (this.userIdentified = true) : (this.userIdentified = false);
    },
    redirect() {
      return this.$router.push("/covid");
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  transform: translate(-100px, 20px);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  transform: translate(0, 0);
}
</style>
