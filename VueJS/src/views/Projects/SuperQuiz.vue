<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <transition name="flip" mode="out-in">
          <component
            :is="mode"
            @answered="answered($event)"
            @confirmed="mode = 'Question'"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '../../components/SuperQuiz/Question.vue';
import Answer from '../../components/SuperQuiz/Answer.vue';

export default {
  components: {
    Question,
    Answer,
  },
  data() {
    return {
      mode: 'Question',
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'Answer';
      } else {
        this.mode = 'Question';
        alert('Wrong, try again');
      }
    },
  },
};
</script>

<style>
  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
