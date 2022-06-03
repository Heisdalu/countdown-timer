"use strict"
const exitBtn = document.getElementById("exit-btn")
const main_container = document.getElementById("main-container")
const modal = document.querySelector(".modal")
const submit_Btn = document.querySelector("#submit")
const input_Days = document.getElementById("days")
const input_Hours = document.getElementById("hours")
const input_Minutes = document.getElementById("minutes")
const input_Second = document.getElementById("seconds")
const display_Days = document.getElementById("days-value")
const display_Hrs = document.getElementById("hours-value")
const display_Minutes = document.getElementById("minutes-value")
const display_Seconds = document.getElementById("seconds-value")

function exitModal() {
  modal.classList.replace("modal", "modal2")
  main_container.style.filter = `none`
}

function timer(arr) {
  let [day, hrs, minutes, seconds] = arr

  let convert_To_Seconds = day * 86400 + hrs * 3600 + minutes * 60 + seconds

  let counts = setInterval(() => {
    let getDays = parseInt(convert_To_Seconds / 86400)
    let getDays_Remainder = convert_To_Seconds % 86400

    let getHrs = parseInt(getDays_Remainder / 3600)
    let getHrs_Remainder = getDays_Remainder % 3600

    let getMinutes = parseInt(getHrs_Remainder / 60)
    let getSeconds = getDays_Remainder % 60

    display_Days.textContent = `${getDays}`.padStart(2, 0)
    display_Hrs.textContent = `${getHrs}`.padStart(2, 0)
    display_Minutes.textContent = `${getMinutes}`.padStart(2, 0)
    display_Seconds.textContent = `${getSeconds}`.padStart(2, 0)
    convert_To_Seconds--
    if (convert_To_Seconds < 0) clearTimeout(counts)
  }, 1000)
}

submit_Btn.addEventListener("click", (e) => {
  const arr = [
    Number.parseInt(input_Days.value),
    Number.parseInt(input_Hours.value),
    Number.parseInt(input_Minutes.value),
    Number.parseInt(input_Second.value),
  ]

  const validateArr = arr.every((el) => Number.isFinite(el)) // validate all numbers in the array

  if (validateArr) {
    // if true
    exitModal()
    timer(arr)
  } else {
    document.getElementById("validate-msg").style.display = "inline"
    setTimeout(() => {
      document.getElementById("validate-msg").style.display = "none"
    }, 3000)
  }
})
