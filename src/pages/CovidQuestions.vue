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
          v-model="antibodiesDate"
        />
        <input
          id="antibodies-number"
          type="number"
          placeholder="ანტისხეულების რაოდენობა"
          :class="inputStyling"
          v-model="antibodiesNumber"
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
            rules="required"
            v-model="covidSicknessDate"
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
        <red-circle
          v-if="showLogo"
          class="opacity-80 absolute top-[400px] right-[750px]"
        ></red-circle>
      </transition>

      <div class="flex justify-start">
        <base-link :link="{ name: 'identify' }"></base-link>

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
import RadioWrapper from "@/components/simplify/RadioWrapper.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";
import BaseLink from "@/components/ui/BaseLink.vue";
import RedCircle from "@/components/icons/RedCircle.vue";
export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    RadioWrapper,
    BaseTitle,
    BaseBackground,
    BaseLink,
    RedCircle,
  },
  data() {
    return {
      showLogo: false,
      dataIsValid: false,
      hadCovid: this.$store.state.covid.had_covid,
      hadTest: this.$store.state.covid.had_antibody_test,
      antibodiesDate: this.$store.state.covid.antibodies.test_date,
      antibodiesNumber: this.$store.state.covid.antibodies.number,
      covidSicknessDate: this.$store.state.covid.covid_sickness_date,
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    checkData(meta) {
      meta.valid ? (this.dataIsValid = true) : (this.dataIsValid = false);
    },
    redirect() {
      this.$store.dispatch("setCovid", {
        covid: this.hadCovid,
        test: this.hadTest,
        antibodiesDate: this.antibodiesDate,
        antibodiesNum: this.antibodiesNumber,
        sicknessDate: this.covidSicknessDate,
      });
      this.$router.push({ name: "vaccine" });
    },
  },
  computed: {
    inputStyling() {
      return "w-[515px] h-[50px] border-[1px] border-border-color bg-transparent focus:outline-none indent-4 text-[18px] mt-10 ml-5";
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
