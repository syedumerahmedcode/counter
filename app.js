const ZERO = 0;
// set initial count

let count = ZERO;

// select value and buttons

/**
 * We are using '#' because we are fetching and id-->value
 */
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const click = "click";
// console.log(value);
// console.log(btns);

// Instead of calling AddEventListener for each button one by one,
// we will use forEach() method instead.
btns.forEach(function (btn) {
  btn.addEventListener(click, function (eventObject) {
    const blackColor = "#222";
    const greenColor = "green";
    const redColor = "red";
    const styles = eventObject.currentTarget.classList;
    const decrease = "decrease";
    const increase = "increase";
    // console.log(styles);
    if (styles.contains(decrease)) {
      count--;
    } else if (styles.contains(increase)) {
      count++;
    } else {
      count = ZERO;
    }
    if (count > ZERO) {
      value.style.color = greenColor;
    }
    if (count < ZERO) {
      value.style.color = redColor;
    }
    if (count === ZERO) {
      value.style.color = blackColor;
    }
    value.textContent = count;
  });
});
