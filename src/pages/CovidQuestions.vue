<template>
  <base-container page="2">
    <div>
      <div>
        <base-title title="გაქვს გადატანილი Covid-19?*"></base-title>
        <radio-wrapper id="yes" label="კი">
          <input
            type="radio"
            name="covid"
            id="yes"
            value="yes"
            v-model="hadCovid"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="no" label="არა">
          <input
            type="radio"
            name="covid"
            id="no"
            value="no"
            v-model="hadCovid"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="have_right_now" label="ახლა მაქვს">
          <input
            type="radio"
            name="covid"
            id="have_right_now"
            value="have_right_now"
            v-model="hadCovid"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div v-if="hadCovid === 'yes'">
        <base-title title="ანტისხეულების ტესტი გაქვს გაკეთებული?*"></base-title>
        <radio-wrapper id="test_yes" label="კი">
          <input
            type="radio"
            name="test"
            id="test_yes"
            :value="true"
            v-model="hadTest"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="test_no" label="არა">
          <input
            type="radio"
            name="test"
            id="test_no"
            :value="false"
            v-model="hadTest"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div v-if="hadCovid === 'yes' && hadTest === true" class="w-[565px]">
        <base-title
          title="თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
          რაოდენობა*"
        ></base-title>
        <input
          id="antibodies-date"
          type="text"
          placeholder="რიცხვი"
          onfocus="(this.type='date')"
          :class="inputStyling"
          :value="antibodiesDate"
          @input="changeAntibodiesDate"
        />
        <input
          id="antibodies-number"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          :class="inputStyling"
          :value="antibodiesNumber"
          @input="changeAntibodiesNumber"
        />
      </div>

      <div
        v-else-if="hadCovid === 'yes' && hadTest === false"
        class="w-[565px]"
      >
        <base-title
          title="მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*"
        ></base-title>
        <Form v-slot="{ meta, errors }">
          <Field
            v-slot="{ field }"
            name="date"
            id="date"
            :rules="validateDate"
            :value="covidSicknessDate"
            @input="changeCovidSicknessDate"
          >
            <input
              v-bind="field"
              type="text"
              onfocus="(this.type='date')"
              placeholder="დდ/თთ/წწ"
              :class="inputStyling"
            />
          </Field>
          <p v-if="errors.date" class="text-error-color mt-10">
            {{ errors.date }}
          </p>
          {{ checkData(meta) }}
        </Form>
      </div>
    </div>

    <div>
      <base-background class="bg-covid-image"></base-background>

      <transition>
        <img
          v-if="showLogo"
          src="@/assets/red-bg.svg"
          class="opacity-80 absolute top-[400px] right-[750px]"
        />
      </transition>

      <div class="flex justify-start">
        <base-link link="/identify"></base-link>

        <base-button
          @click="redirect"
          :disabled="!questionsAnswered"
          :stroke="questionsAnswered"
        ></base-button>
      </div>
    </div>
  </base-container>
</template>

<script>
import { Field, Form } from "vee-validate";
import RadioWrapper from "../components/simplify/RadioWrapper.vue";
export default {
  components: {
    Form,
    Field,
    RadioWrapper,
  },
  data() {
    return {
      showLogo: false,
      dataIsValid: false,
      antibodiesDate: this.$store.getters.getAntibodiesDate,
      antibodiesNumber: this.$store.getters.getAntibodiesNumber,
      covidSicknessDate: this.$store.getters.getCovidSicknessDate,
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    checkData(meta) {
      meta.valid ? (this.dataIsValid = true) : (this.dataIsValid = false);
    },
    validateDate(value) {
      if (!value) {
        return "ეს ველი სავალდებულოა";
      }
      return true;
    },
    redirect() {
      this.$router.push("/");
    },
    changeAntibodiesDate(e) {
      this.$store.dispatch("changeAntibodiesDate", { value: e.target.value });
    },
    changeAntibodiesNumber(e) {
      this.$store.dispatch("changeAntibodiesNumber", { value: e.target.value });
    },
    changeCovidSicknessDate(e) {
      this.$store.dispatch("changeCovidSicknessDate", {
        value: e.target.value,
      });
    },
  },
  computed: {
    inputStyling() {
      return "w-[515px] h-[50px] border-[1px] border-border-color bg-transparent focus:outline-none indent-4 text-[18px] mt-10 ml-5";
    },
    hadCovid: {
      get() {
        return this.$store.getters.getCovid;
      },
      set(value) {
        this.$store.dispatch("setCovid", value);
      },
    },
    hadTest: {
      get() {
        return this.$store.getters.getTest;
      },
      set(value) {
        this.$store.dispatch("setTest", value);
      },
    },
    questionsAnswered() {
      if (this.hadCovid === "no" || this.hadCovid === "have_right_now") {
        return true;
      }
      if (this.hadCovid === "yes" && this.hadTest) {
        return true;
      }
      if (this.hadCovid === "yes" && this.dataIsValid) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  transform: translate(100px, -50px);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  transform: translate(0, 0);
}
</style>