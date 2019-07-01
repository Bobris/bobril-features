import * as b from "bobril";
import { observable } from "bobx";

const counter = observable(0);

setInterval(() => {
  counter.set(counter.get() + 1);
}, 2000);

b.init(() => counter.get());
