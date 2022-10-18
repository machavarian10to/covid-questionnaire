<template>
  <base-container page="3">
    <div>
      <div>
        <base-title title="უკვე აცრილი ხარ?*"></base-title>
        <radio-input v-model="hadVaccine" :options="vaccine"></radio-input>
      </div>

      <div v-if="hadVaccine === 'true'">
        <base-title title="აირჩიე რა ეტაპზე ხარ*"></base-title>
        <radio-input v-model="vaccineStage" :options="stage"></radio-input>
      </div>

      <vaccine-link
        v-if="
          hadVaccine === 'true' &&
          vaccineStage === 'first_dosage_and_not_registered_yet'
        "
      ></vaccine-link>

      <div v-if="hadVaccine === 'false'">
        <base-title title="რას ელოდები?*"></base-title>
        <radio-input v-model="waitingReason" :options="reason"></radio-input>
      </div>

      <register-vaccine
        v-if="hadVaccine === 'false' && waitingReason === 'waiting_plan'"
      ></register-vaccine>
    </div>

    <div class="mt-20">
      <base-background class="bg-vaccine-image"></base-background>

      <transition>
        <yellow-star
          v-if="showLogo"
          class="opacity-80 absolute top-[250px] right-[680px]"
        ></yellow-star>
      </transition>

      <div class="flex justify-start">
        <base-link :link="{ name: 'covid' }"></base-link>

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
import BaseLink from "@/components/ui/BaseLink.vue";
import BaseTitle from "@/components/ui/BaseTitle.vue";
import YellowStar from "@/components/icons/YellowStar.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";
import RadioInput from "@/components/simplify/RadioInput.vue";
import VaccineLink from "@/components/simplify/VaccineLink.vue";
import RegisterVaccine from "../components/simplify/RegisterVaccine.vue";

export default {
  data() {
    return {
      showLogo: false,
      hadVaccine: this.$store.state.vaccine.had_vaccine,
      vaccineStage: this.$store.state.vaccine.vaccination_stage,
      waitingReason: this.$store.state.vaccine.i_am_waiting,
      vaccine: [
        {
          name: "vaccine",
          value: true,
          id: "vaccine_yes",
          label: "კი",
        },
        {
          name: "vaccine",
          value: false,
          id: "vaccine_no",
          label: "არა",
        },
      ],
      stage: [
        {
          name: "stage",
          value: "first_dosage_and_registered_on_the_second",
          id: "first",
          label: "პირველი დოზა და დარეგისტრირებული ვარ მეორეზე",
        },
        {
          name: "stage",
          value: "fully_vaccinated",
          id: "fully",
          label: "სრულად აცრილი ვარ",
        },
        {
          name: "stage",
          value: "first_dosage_and_not_registered_yet",
          id: "not_second",
          label: "პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე",
        },
      ],
      reason: [
        {
          name: "waiting",
          value: "waiting_date",
          id: "vaccine_date",
          label: "დარეგისტრირებული ვარ და ველოდები რიცხვს",
        },
        {
          name: "waiting",
          value: "waiting_nothing",
          id: "no_vaccinate",
          label: "არ ვგეგმავ",
        },
        {
          name: "waiting",
          value: "waiting_plan",
          id: "vaccine_plan",
          label: "გადატანილი მაქვს და ვგეგმავ აცრას",
        },
      ],
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    redirect() {
      this.$store.dispatch("setData", {
        vaccine: this.hadVaccine,
        stage: this.vaccineStage,
        reason: this.waitingReason,
      });
      this.$router.push({ name: "policy" });
    },
  },
  computed: {
    questionsAnswered() {
      if (this.hadVaccine === "true" && this.vaccineStage) {
        return true;
      }
      if (this.hadVaccine === "false" && this.waitingReason) {
        return true;
      }
      return false;
    },
  },
  components: {
    BaseLink,
    BaseTitle,
    YellowStar,
    RadioInput,
    BaseBackground,
    VaccineLink,
    RegisterVaccine,
  },
};
</script>

<style scoped>
.v-enter-from {
  transform: translate(-100px, 100px);
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  transform: translate(0, 0);
}
</style>
