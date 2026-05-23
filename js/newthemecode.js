"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const customBtn = document.querySelector(".custom__bg-btn"),
    pageHeader = document.querySelector("body") || document.documentElement,
    viewBtn = document.querySelectorAll(".view-btn"),
    phoneIcon = document.querySelectorAll(".box__item"),
    position = document.querySelectorAll(".projects__content"),
    newsCardBtn = document.querySelector(".contact__box"),
    upBtn = document.querySelector(".dark"),
    priceBar = document.querySelectorAll(".btn"),
    cardTitle = document.querySelectorAll(".card__title"),
    contact__item = document.querySelectorAll(".contact__item"),
    info__title = document.querySelectorAll(".info__title"),
    contact__link = document.querySelectorAll(".contact__link"),
    title = document.querySelectorAll(".title"),
    banner__title = document.querySelector(".banner__title"),
    banner__desc = document.querySelector(".banner__desc"),
    skill__text = document.querySelectorAll(".skill__text"),
    project = document.querySelectorAll(".projects__content"),
    project__link = document.querySelectorAll(".project__title"),
    project__info = document.querySelectorAll(".project__info"),
    section1 = document.querySelector(".section1"),
    section2 = document.querySelector(".section2");
  customBtn.addEventListener("change", () => {
    if (customBtn.value === "section2") {
    pageHeader.style.setProperty(`--body__bg`, `black`);
    priceBar.forEach((btn) => {
      btn.style.setProperty(`--shadow`, `white`);
    });
    contact__item.forEach((item) => {
      item.style.setProperty(`--white`, `gray`);
    });
    info__title.forEach((title) => {
      title.style.setProperty(`--footer__bg`, `white`);
    });
    contact__link.forEach((link) => {
      link.style.setProperty(`--color-text`, `white`);
    });
    title.forEach((title) => {
      title.style.setProperty(`--black`, `white`);
    });
    banner__title.style.setProperty(`--black`, `white`);
    banner__desc.style.setProperty(
      `--text__color`,
      `rgba(255, 255, 255, 0.911)`,
    );
    phoneIcon.forEach((icon) => {
      icon.style.setProperty(`--white`, `gray`);
    });
    skill__text.forEach((skill) => {
      skill.style.setProperty(`--backround-color`, `white`);
    });
    project.forEach((item) => {
      item.style.setProperty(`--white`, `gray`);
    });
    project__link.forEach((bla) => {
      bla.style.setProperty(`--dark`, `white`);
    });
    project__info.forEach((info) => {
      info.style.setProperty(`--color-text`, `rgba(255, 255, 255, 0.911)`);
    });
  } else if (customBtn.value === "section1") {
    pageHeader.style.setProperty(`--body__bg`, `white`);
    priceBar.forEach((btn) => {
      btn.style.setProperty(`--shadow`, `black`);
    });
    contact__item.forEach((item) => {
      item.style.setProperty(`--white`, `white`);
    });
    info__title.forEach((title) => {
      title.style.setProperty(`--footer__bg`, `black`);
    });
    contact__link.forEach((link) => {
      link.style.setProperty(`--color-text`, `black`);
    });
    title.forEach((title) => {
      title.style.setProperty(`--black`, `black`);
    });
    banner__title.style.setProperty(`--black`, `black`);
    banner__desc.style.setProperty(`--text__color`, `black`);
    phoneIcon.forEach((icon) => {
      icon.style.setProperty(`--white`, `white`);
    });
    skill__text.forEach((skill) => {
      skill.style.setProperty(`--backround-color`, `black`);
    });
    project.forEach((item) => {
      item.style.setProperty(`--white`, `white`);
    });
    project__link.forEach((bla) => {
      bla.style.setProperty(`--dark`, `black`);
    });
    project__info.forEach((info) => {
      info.style.setProperty(`--color-text`, `darkgray`);
    });
  }
});
});

