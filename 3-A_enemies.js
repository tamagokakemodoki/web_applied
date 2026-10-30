// データ：敵のオブジェクトの配列
const enemies = [
  { name: "スライム", hp: 5 },
  { name: "ゴブリン", hp: 9 },
  { name: "ドラゴン", hp: 20 }
];

// データからリストを作る
function showEnemies() {
  const list = document.getElementById("enemyList");
  list.innerHTML = "";

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const li = document.createElement("li");
    li.innerText = `${enemy.name}（HP：${enemy.hp}）`;

    // HPが0以下なら .down クラスをつけて打ち消し線にする
    if (enemy.hp <= 0) {
      li.classList.add("down");
      li.innerText = `${enemy.name}（倒した！）`;
    }

    list.appendChild(li);
  }
}

// 攻撃：全員の HP を 3 減らして、リストを作り直す
function attack() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].hp -= 3;
    
    if (enemies[i].hp < 0) {
      enemies[i].hp = 0;
    }
  }

  showEnemies();
}

// 新しい敵を呼ぶ：pushを使ってenemies配列に追加する
function addEnemy() {
  // 新しい敵のオブジェクトを作る（例として「オーク」、HPは12）
  const newEnemy = { name: "オーク", hp: 12 };

  // pushメソッドで配列の最後尾に追加
  enemies.push(newEnemy);

  // リストを再描画して画面に反映させる
  showEnemies();
}

// 最初に画面を表示する
showEnemies();