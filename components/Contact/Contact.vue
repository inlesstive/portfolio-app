<script lang="ts" setup></script>

<template>
  <div class="wrapper contact__content">
    <h2 class="contact__title">
      {{ $t("contact__title") }}
    </h2>

    <div class="contact__block">
      <p class="contact__text">
        {{ $t("contact__text") }}
      </p>
      <form class="contact__form" action="">
        <div class="contact__form-top">
          <input type="text" class="contact__form-input" :placeholder="$t('contact__placeholder-name')" />
          <input type="text" class="contact__form-input" :placeholder="$t('contact__placeholder-email')" />
        </div>
        <textarea
          class="contact__form-textarea"
          :placeholder="$t('contact__placeholder-textarea')"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button class="contact__form-send">
          {{ $t("contact__send-button") }}
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  &__block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 50px;
  }
  &__content {
    margin-top: 50px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    &-send {
      padding: 13px 33px;
      margin-left: auto;
      border-radius: 12px;
      background-color: var(--hero__button-resume-color);
      outline: none;
      color: var(--hero__text-resume-color);
      font-size: 19px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 115.789% */
      letter-spacing: 0.082px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover{
        background-color: var(--hero__tbutton-resume-color);
      }
      
    }
    &-textarea {
      padding: 13px 15px;
      border: solid 1px var(--input__form-color);
      outline: none;
      max-height: 100px;
      border-radius: 12px;
      color: var(--secodn__black-color);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      resize: none;
    }
    &-top {
      display: flex;
      gap: 15px;
    }
    &-input {
      padding: 13px 15px;
      border: solid 1px var(--input__form-color);
      outline: none;
      border-radius: 12px;
      color: var(--secodn__black-color);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
    }
  }
  &__text {
    color: var(--secodn__black-color);
    font-family: SF Pro Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 36px */
    max-width: 620px;
  }
  &__title {
    color: var(--title__color);
    font-family: SF Pro Display;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 64px */
    letter-spacing: 0.141px;
    text-align: center;
  }
}
</style>
