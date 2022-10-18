<template>
  <base-container page="4">
    <div class="mt-[40px]">
      <redberry-value></redberry-value>

      <div>
        <base-title
          title="რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*"
          class="w-[600px]"
        ></base-title>
        <radio-input
          v-model="meetingsAmount"
          :options="nonFormal"
        ></radio-input>
      </div>

      <div>
        <base-title
          title="კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*"
          class="w-[600px]"
        ></base-title>
        <radio-input v-model="officeMeetings" :options="office"></radio-input>
      </div>

      <div>
        <textarea-input
          v-model="liveMeetings"
          title="რას ფიქრობ ფიზიკურ შეკრებებზე?"
        ></textarea-input>

        <textarea-input
          v-model="userOpinion"
          title="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
        ></textarea-input>
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
import RedHeart from "@/components/icons/RedHeart.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";
import RedberryValue from "../components/simplify/RedberryValue.vue";
import RadioInput from "../components/simplify/RadioInput.vue";
import TextareaInput from "../components/simplify/TextareaInput.vue";

export default {
  components: {
    BaseLink,
    BaseTitle,
    BaseBackground,
    RedHeart,
    RedberryValue,
    RadioInput,
    TextareaInput,
  },
  data() {
    return {
      showLogo: false,
      meetingsAmount: this.$store.state.policy.non_formal_meetings,
      officeMeetings: this.$store.state.policy.number_of_days_from_office,
      liveMeetings: this.$store.state.policy.what_about_meetings_in_live,
      userOpinion: this.$store.state.policy.tell_us_your_opinion_about_us,
      nonFormal: [
        {
          name: "meetings",
          value: "twice_a_week",
          id: "twice_week",
          label: "კვირაში ორჯერ",
        },
        {
          name: "meetings",
          value: "once_a_week",
          id: "once_week",
          label: "კვირაში ერთხელ",
        },
        {
          name: "meetings",
          value: "once_in_a_two_weeks",
          id: "once_two_week",
          label: "ორ კვირაში ერთხელ",
        },
        {
          name: "meetings",
          value: "once_in_a_month",
          id: "once_month",
          label: "თვეში ერთხელ",
        },
      ],
      office: [
        {
          name: "work_from_office",
          value: "0",
          id: "zero",
          label: "0",
        },
        {
          name: "work_from_office",
          value: "1",
          id: "one",
          label: "1",
        },
        {
          name: "work_from_office",
          value: "2",
          id: "two",
          label: "2",
        },
        {
          name: "work_from_office",
          value: "3",
          id: "three",
          label: "3",
        },
        {
          name: "work_from_office",
          value: "4",
          id: "four",
          label: "4",
        },
        {
          name: "work_from_office",
          value: "5",
          id: "five",
          label: "5",
        },
      ],
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    submitData() {
      this.$store.dispatch("setPolicy", {
        meetingsAmount: this.meetingsAmount,
        officeMeetings: this.officeMeetings,
        liveMeetings: this.liveMeetings,
        userOpinion: this.userOpinion,
      });
      const states = this.$store.state;
      fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...states.identify,
          ...states.covid,
          ...states.vaccine,
          ...states.policy,
        }),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$router.push({ name: "thanks" });
    },
  },
  computed: {
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
