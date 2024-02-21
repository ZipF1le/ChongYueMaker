'use strict';
const skillInput = document.getElementById('skill');
const makeButton = document.getElementById('make');
const resultDivision = document.getElementById('result-area');

makeButton.addEventListener(
  'click',
  () => {
    const skill = skillInput.value;
    console.log(skill);
    if (skill.length === 0) {
      // 名前が空なら処理を終了する
      return;
    }
    // 構文を生成
    resultDivision.innerText = '';

    const paragraph = document.createElement('p');
    const result = ChongYueMaker(skill);
    paragraph.innerText = result;
    console.log(ChongYueMaker(skill));
    resultDivision.appendChild(paragraph);
  }
);

// Enterで構文生成するはずだった
skillInput.addEventListener(
  'keydown',
  (event) => {
    if(event.code === 'Enter') {
      makeButton.dispatchEvent(new Event('click'));
    }
  }
)

/**
 * スキル回数を渡すと構文を返す関数
 * @param {string} skill スキル回数
 * @return {string} 構文
 */
function ChongYueMaker (skill) {
  let ChongYue = '';
  console.log(skill);
  // スキル回数分構文と拳を生成する
  for (let i = 1; i <= skill; i++) {
    let random = Math.floor(Math.random() * 4);
    console.log(random);
    if (random === 0) {
      ChongYue = ChongYue + '形なりを成さず';
    } else if (random === 1) {
      ChongYue = ChongYue + '千招百式';
    } else if (random === 2) {
      ChongYue = ChongYue + '勁発すれば';
    } else if (random === 3) {
      ChongYue = ChongYue + '貴様らの問題解決は';
    }
    console.log(ChongYue)
    let randomPunch = Math.floor(Math.random() * 2);
    // 構文の最後には拳をつけない
    if (i <= skill - 1) {
      if (randomPunch === 0) {
        ChongYue = ChongYue + '👊';
      } else if (randomPunch === 1) {
        ChongYue = ChongYue + '🤜';
      }
    }
    console.log(ChongYue)
  }
  return ChongYue;
}
let random = Math.floor(Math.random() * 4);
console.log(random)
let testChongYue = '';
if (random === 0) {
testChongYue = testChongYue + '形なりを成さず';
} else if (random === 1) {
testChongYue = testChongYue + '千招百式';
} else if (random === 2) {
testChongYue = testChongYue + '勁発すれば';
} else if (random === 3) {
testChongYue = testChongYue + '貴様らの問題解決は';
}
console.log(testChongYue);
