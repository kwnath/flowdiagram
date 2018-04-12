import { TweenLite } from "gsap";
import Draggable from "gsap/Draggable";

let bezierWeight = 0.625;

const handles = document.querySelectorAll(".handle");
const path = document.querySelector(".path");

TweenLite.set(handles[0], { x: 400, y: 150 });
TweenLite.set(handles[1], { x: 200, y: 350 });
TweenLite.set(handles[2], { x: 600, y: 150 });
TweenLite.set(handles[3], { x: 700, y: 350 });

Draggable.create(handles, {
  onDrag: updatePath
});

updatePath();

function updatePath() {

  const x1 = handles[0]._gsTransform.x;
  const y1 = handles[0]._gsTransform.y;

  const x4 = handles[1]._gsTransform.x;
  const y4 = handles[1]._gsTransform.y;

  const dx = Math.abs(x4 - x1) * bezierWeight;

  const x2 = x1 - dx;
  const x3 = x4 + dx;

  const data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;

  path.setAttribute("d", data);
}


module.exports = {
  connector
}
