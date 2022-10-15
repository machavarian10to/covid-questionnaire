<template>
  <base-container page="3">
    <div>
      <div>
        <base-title title="უკვე აცრილი ხარ?*"></base-title>
        <radio-wrapper id="vaccine_yes" label="კი">
          <input
            type="radio"
            name="vaccine"
            id="vaccine_yes"
            :value="true"
            v-model="hadVaccine"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="vaccine_no" label="არა">
          <input
            type="radio"
            name="vaccine"
            id="vaccine_no"
            :value="false"
            v-model="hadVaccine"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div v-if="hadVaccine === true">
        <base-title title="აირჩიე რა ეტაპზე ხარ*"></base-title>
        <radio-wrapper
          id="first"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
        >
          <input
            type="radio"
            name="stage"
            id="first"
            value="first_dosage_and_registered_on_the_second"
            v-model="vaccineStage"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="fully" label="სრულად აცრილი ვარ">
          <input
            type="radio"
            name="stage"
            id="fully"
            value="fully_vaccinated"
            v-model="vaccineStage"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper
          id="not_second"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
        >
          <input
            type="radio"
            name="stage"
            id="not_second"
            value="first_dosage_and_not_registered_yet"
            v-model="vaccineStage"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div
        v-if="
          hadVaccine === true &&
          vaccineStage === 'first_dosage_and_not_registered_yet'
        "
        class="mt-12 ml-16 text-[20px]"
      >
        <div>
          <p>რომ არ გადადო,</p>
          <p>ბარემ ახლავე დარეგისტრირდი</p>
          <a
            href="https://booking.moh.gov.ge/"
            target="_blank"
            class="text-link-color"
            >https://booking.moh.gov.ge/</a
          >
        </div>
      </div>

      <div v-if="hadVaccine === false">
        <base-title title="რას ელოდები?*"></base-title>
        <radio-wrapper
          id="vaccine_date"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
        >
          <input
            type="radio"
            name="waiting"
            id="vaccine_date"
            value="waiting_date"
            v-model="waitingReason"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper id="no_vaccinate" label="არ ვგეგმავ">
          <input
            type="radio"
            name="waiting"
            id="no_vaccinate"
            value="waiting_nothing"
            v-model="waitingReason"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>

        <radio-wrapper
          id="vaccine_plan"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
        >
          <input
            type="radio"
            name="waiting"
            id="vaccine_plan"
            value="waiting_plan"
            v-model="waitingReason"
            class="w-[23px] h-[23px]"
          />
        </radio-wrapper>
      </div>

      <div
        v-if="hadVaccine === false && waitingReason === 'waiting_plan'"
        class="mt-12 ml-16 text-[20px]"
      >
        <div>
          <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1</p>
          <p>თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>

          <div class="mt-8">
            <p>👉 რეგისტრაციის ბმული</p>
            <a
              href="https://booking.moh.gov.ge/"
              target="_blank"
              class="text-link-color"
              >https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
      </div>
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
import RadioWrapper from "@/components/simplify/RadioWrapper.vue";
import BaseBackground from "@/components/ui/BaseBackground.vue";

export default {
  data() {
    return {
      showLogo: false,
    };
  },
  mounted() {
    this.showLogo = true;
  },
  methods: {
    redirect() {
      this.$router.push({ name: "policy" });
    },
  },
  computed: {
    hadVaccine: {
      get() {
        return this.$store.getters.getVaccine;
      },
      set(value) {
        this.$store.dispatch("setVaccine", value);
      },
    },
    vaccineStage: {
      get() {
        return this.$store.getters.getStage;
      },
      set(value) {
        this.$store.dispatch("setStage", value);
      },
    },
    waitingReason: {
      get() {
        return this.$store.getters.getReason;
      },
      set(value) {
        this.$store.dispatch("setReason", value);
      },
    },
    questionsAnswered() {
      if (this.hadVaccine && this.vaccineStage) {
        return true;
      }
      if (!this.hadVaccine && this.waitingReason) {
        return true;
      }
      return false;
    },
  },
  components: {
    BaseLink,
    BaseTitle,
    YellowStar,
    RadioWrapper,
    BaseBackground,
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
