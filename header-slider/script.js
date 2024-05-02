const left = document.getElementById("left-side");

const handlePointerMove = (e) => {
  const pointer = (e.clientX / window.innerWidth) * 100;
  left.style.width = `${pointer}%`;
};

document.onmousemove = (e) => {
  handlePointerMove(e);
};

document.ontouchmove = (e) => {
  handlePointerMove(e.touches[0]);
};
