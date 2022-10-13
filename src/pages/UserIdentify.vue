<template>
  <base-container page="1">
    <div>
      <Form @submit="redirect" v-slot="{ meta }">
        <base-input label="სახელი*" title="name">
          <Field
            id="name"
            name="name"
            type="text"
            rules="required:სახელი|min_max:სახელი,3,255|alpha:სახელი"
            :class="inputStyling"
            :value="name"
            @input="changeName"
          />
          <ErrorMessage class="text-error-color" name="name" />
        </base-input>

        <base-input label="გვარი*" title="surname">
          <Field
            id="surname"
            name="surname"
            type="text"
            rules="required:გვარი|min_max:გვარი,3,255|alpha:გვარი"
            :class="inputStyling"
            :value="surname"
            @input="changeLastName"
          />
          <ErrorMessage class="text-error-color" name="surname" />
        </base-input>

        <base-input label="მეილი*" title="email">
          <Field
            id="email"
            name="email"
            type="email"
            rules="required:მეილი|email|redberry_email"
            :class="inputStyling"
            :value="email"
            @input="changeEmail"
          />
          <ErrorMessage class="text-error-color" name="email" />
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
import { Field, Form, ErrorMessage } from "vee-validate";
import AsteriskTip from "../components/simplify/AsteriskTip.vue";
import BaseInput from "../components/ui/BaseInput.vue";
import BaseBackground from "../components/ui/BaseBackground.vue";
export default {
  data() {
    return {
      userIdentified: false,
      showLogo: false,
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
    ErrorMessage,
    AsteriskTip,
    BaseInput,
    BaseBackground,
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
    checkIfUserIdentify(meta) {
      meta.valid ? (this.userIdentified = true) : (this.userIdentified = false);
    },
    redirect() {
      return this.$router.push({ name: "covid" });
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
