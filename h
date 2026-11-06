[1mdiff --git a/5-A_bouncelab.js b/5-A_bouncelab.js[m
[1mindex df7a316..dbbbc0a 100644[m
[1m--- a/5-A_bouncelab.js[m
[1m+++ b/5-A_bouncelab.js[m
[36m@@ -7,6 +7,7 @@[m [mlet x = 100;[m
 let y = 80;[m
 let vx = 180;[m
 let vy = 140;[m
[32m+[m[32mlet gravity = 500; // 重力（1秒ごとに増える速度）[m
 let r = 14;  // const から let に変更[m
 let color = "#ffd166";[m
 [m
[36m@@ -38,26 +39,35 @@[m [mdocument.addEventListener("keydown", (e) => {[m
 });[m
 [m
 function update(dt) {[m
[32m+[m[32m  // 重力を加える[m
[32m+[m[32m  vy = vy + gravity * dt;[m
[32m+[m
[32m+[m[32m  // ボールの位置を更新[m
   x = x + vx * dt;[m
   y = y + vy * dt;[m
 [m
[32m+[m[32m  // 左右の壁[m
   if (x + r > canvas.width) {[m
     x = canvas.width - r;[m
     vx = -vx;[m
   }[m
[32m+[m
   if (x - r < 0) {[m
     x = r;[m
     vx = -vx;[m
   }[m
 [m
[31m-  if (y + r > canvas.height) {[m
[31m-    y = canvas.height - r;[m
[31m-    vy = -vy;[m
[31m-  }[m
[32m+[m[32m  // 上の壁[m
   if (y - r < 0) {[m
     y = r;[m
     vy = -vy;[m
   }[m
[32m+[m
[32m+[m[32m  // 床に当たったら跳ね返る[m
[32m+[m[32m  if (y + r > canvas.height) {[m
[32m+[m[32m    y = canvas.height - r;[m
[32m+[m[32m    vy = -vy * 0.85; // 15%ずつ跳ね返る力を弱くする[m
[32m+[m[32m  }[m
 }[m
 [m
 function draw() {[m
