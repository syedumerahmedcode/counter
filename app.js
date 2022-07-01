// set initial count
let count = 0;

// select value and buttons

/**
 * We are using '#' because we are fetching and id-->value
 */
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(value);
// console.log(btns);

// Instead of calling AddEventListener for each button one by one,
// we will use forEach() method instead.
btns.forEach(function (btn) {
  btn.addEventListener("click", function (eventObject) {
    const styles = eventObject.currentTarget.classList;
    // console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
