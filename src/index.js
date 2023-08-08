import bar from "./bar.ts";
import "./foo.scss";

export default function () {
  console.log(bar);
  document.querySelector("body").innerHTML = bar;
}
