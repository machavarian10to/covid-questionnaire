<template>
  <base-container page="4">
    <div class="mt-[40px]">
      <div class="text-[22px]">
        <p>რედბერის მთავარი ღირებულება ჩვენი გუნდის</p>
        <p>თითოეული წევრია. გარემო,რომელსაც ჩვენი</p>
        <p>თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა</p>
        <p>წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის</p>
        <p>მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.</p>

        <div class="mt-5">
          <p>პანდემიის პერიოდში ერთმანეთსაც იშვიათად</p>
          <p>ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც</p>
          გაიშვიათდა.
        </div>
      </div>

      <div>
        <base-title
          title="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
          class="w-[600px]"
        ></base-title>
        <radio-wrapper id="twice_week" label="კვირაში ორჯერ">
          <input
            type="radio"
            name="meetings"
            id="twice_week"
            value="twice_a_week"
            v-model="meetingsAmount"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="once_week" label="კვირაში ერთხელ">
          <input
            type="radio"
            name="meetings"
            id="once_week"
            value="once_a_week"
            v-model="meetingsAmount"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="once_two_week" label="ორ კვირაში ერთხელ">
          <input
            type="radio"
            name="meetings"
            id="once_two_week"
            value="once_in_a_two_weeks"
            v-model="meetingsAmount"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="once_month" label="თვეში ერთხელ">
          <input
            type="radio"
            name="meetings"
            id="once_month"
            value="once_in_a_month"
            v-model="meetingsAmount"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div>
        <base-title
          title="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
          class="w-[600px]"
        ></base-title>
        <radio-wrapper id="zero" label="0">
          <input
            type="radio"
            name="work_from_office"
            id="zero"
            :value="0"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="one" label="1">
          <input
            type="radio"
            name="work_from_office"
            id="one"
            :value="1"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="two" label="2">
          <input
            type="radio"
            name="work_from_office"
            id="two"
            :value="2"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="three" label="3">
          <input
            type="radio"
            name="work_from_office"
            id="three"
            :value="3"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="four" label="4">
          <input
            type="radio"
            name="work_from_office"
            id="four"
            :value="4"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="five" label="5">
          <input
            type="radio"
            name="work_from_office"
            id="five"
            :value="5"
            v-model="officeMeetings"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div>
        <base-title title="რას ფიქრობ ფიზიკურ შეკრებებზე?"></base-title>
        <textarea
          :value="liveMeetings"
          @input="changeLiveMeetings"
          class="mt-[20px] w-[622px] h-[184px] resize-none bg-transparent border-[1px] border-solid border-border-color text-[24px] p-5"
        ></textarea>
      </div>

      <div>
        <base-title
          title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
        ></base-title>
        <textarea
          :value="userOpinion"
          @input="changeOpinion"
          class="mt-[20px] w-[622px] h-[184px] resize-none bg-transparent border-[1px] border-solid border-border-color text-[24px] p-5"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          :disabled="!questionsAnswered"
          @click="submitData"
          class="bg-btn-color w-[180px] h-[60px] rounded-[42px] mt-[70px] text-white font-bold text-[18px] hover:opacity-90 mr-20"
          :class="{
            'bg-gray-300': !questionsAnswered,
            'text-black': !questionsAnswered,
          }"
        >
          დასრულება
        </button>
      </div>
    </div>

    <div class="mt-20">
      <base-background class="bg-policy-image"></base-background>

      <transition>
        <red-heart
          v-if="showLogo"
          class="opacity-80 absolute top-[350px] right-[670px]"
        >
        </red-heart>
      </transition>
    </div>
  </base-container>
  <div class="flex justify-center my-20">
    <base-link :to="{ name: 'vaccine' }" class="rotate-360"></base-link>
  </div>
</template>

<script>
import BaseLink from "@/components/ui/BaseLink.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import RadioWrapper from "@/components/simplify/RadioWrapper.vue";
import RedHeart from "@/components/icons/RedHeart.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";
export default {
  components: {
    BaseLink,
    BaseTitle,
    RadioWrapper,
    BaseBackground,
    RedHeart,
  },
  data() {
    return {
      showLogo: false,
      liveMeetings: this.$store.getters.getLiveMeetings,
      userOpinion: this.$store.getters.getOpinion,
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    submitData() {
      fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: this.$store.getters.getName,
          last_name: this.$store.getters.getLastName,
          email: this.$store.getters.getEmail,
          had_covid: this.$store.getters.getCovid,
          had_antibody_test: this.$store.getters.getTest,
          covid_sickness_date: this.$store.getters.getCovidSicknessDate,
          antibodies: {
            test_date: this.$store.getters.getAntibodiesDate,
            number: this.$store.getters.getAntibodiesNumber,
          },
          had_vaccine: this.$store.getters.getVaccine,
          vaccination_stage: this.$store.getters.getStage,
          i_am_waiting: this.$store.getters.getReason,
          non_formal_meetings: this.$store.getters.getNonFormalMeetings,
          number_of_days_from_office: this.$store.getters.getOfficeMeetings,
          what_about_meetings_in_live: this.$store.getters.getLiveMeetings,
          tell_us_your_opinion_about_us: this.$store.getters.getOpinion,
        }),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push({ name: "thanks" });
    },
    changeLiveMeetings(e) {
      this.$store.dispatch("changeLiveMeetings", e.target.value);
    },
    changeOpinion(e) {
      this.$store.dispatch("changeOpinion", e.target.value);
    },
  },
  computed: {
    meetingsAmount: {
      get() {
        return this.$store.getters.getNonFormalMeetings;
      },
      set(value) {
        this.$store.dispatch("setNonFormalMeetings", value);
      },
    },
    officeMeetings: {
      get() {
        return this.$store.getters.getOfficeMeetings;
      },
      set(value) {
        this.$store.dispatch("setOfficeMeetings", value);
      },
    },
    questionsAnswered() {
      if (this.meetingsAmount && this.officeMeetings) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  transform: scale(1.5);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  transform: scale(1);
}
</style>
