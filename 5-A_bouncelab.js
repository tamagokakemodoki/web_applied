
const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
const info = document.getElementById("info");

let x = 100;
let y = 80;
let vx = 180;
let vy = 140;
let gravity = 500; // 重力（1秒ごとに増える速度）
let r = 14;  // const から let に変更
let color = "#ffd166";

let last = performance.now();

// キーを押した瞬間に値を変更
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    vx = vx * 1.2;
    vy = vy * 1.2;
  }

  if (e.code === "ArrowDown") {
    vx = vx * 0.8;
    vy = vy * 0.8;
  }

  if (e.code === "ArrowRight") {
    r = Math.min(r + 2, 50);
  }

  if (e.code === "ArrowLeft") {
    r = Math.max(r - 2, 5);
  }

  if (e.code === "KeyC") {
    color = color === "#ffd166" ? "#06d6a0" : "#ffd166";
  }
});

function update(dt) {
  // 重力を加える
  vy = vy + gravity * dt;

  // ボールの位置を更新
  x = x + vx * dt;
  y = y + vy * dt;

  // 左右の壁
  if (x + r > canvas.width) {
    x = canvas.width - r;
    vx = -vx;
  }

  if (x - r < 0) {
    x = r;
    vx = -vx;
  }

  // 上の壁
  if (y - r < 0) {
    y = r;
    vy = -vy;
  }

  // 床に当たったら跳ね返る
  if (y + r > canvas.height) {
    y = canvas.height - r;
    vy = -vy * 0.85; // 15%ずつ跳ね返る力を弱くする
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function loop(now) {
  const dt = (now - last) / 1000;
  last = now;

  info.textContent =
    "dt：" + dt.toFixed(4) +
    " 秒　／　1秒に約 " + (1 / dt).toFixed(0) + " 回";

  update(dt);
  draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
