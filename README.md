# Todolist

## 목차

- [구성]{https://github.com/kimjaehyeonn/Todolist?tab=readme-ov-file#%EA%B5%AC%EC%84%B1}
- [기능] [list 등록]{https://github.com/kimjaehyeonn/Todolist?tab=readme-ov-file#list-%EB%93%B1%EB%A1%9D--%EC%8B%9C%EA%B0%84-%EC%B6%94%EA%B0%80}
- [기능] [list 등록 시 시간 추가]{https://github.com/kimjaehyeonn/Todolist?tab=readme-ov-file#list-%EB%93%B1%EB%A1%9D--%EC%8B%9C%EA%B0%84-%EC%B6%94%EA%B0%80}
- [기능] [alert 기능]{https://github.com/kimjaehyeonn/Todolist?tab=readme-ov-file#alert-%EA%B8%B0%EB%8A%A5}

## 구성

- HTML
- CSS
- Javascript

## list 등록 + 시간 추가

//li 요소 생성함수
function createItem(dateValue, text) {
const itemRow = document.createElement('li');
itemRow.className = 'item';
itemRow.setAttribute('data-time', new Date(dateValue).getTime());
itemRow.innerHTML = `
<span>${dateValue}</span>
  <span>${text}</span>
<i class="fa-solid fa-check"></i>
<i class="fa-solid fa-trash-can"></i>

 </li>`;

// 체크버튼 클릭시 클래스 추가 이벤트
itemRow.querySelector('.fa-check').addEventListener('click', () => {
itemRow.classList.toggle('item_done');
});

// 삭제 버튼 클릭시 itemrow 제거 이벤트
itemRow.querySelector('.fa-trash-can').addEventListener('click', () => {
itemRow.remove();
});

requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));

return itemRow;
}

//추가함수. 콜백으로 들어가는 간다. 인자로 들어가는 것이 아니라 전역으로 저장된 함수가 내부에서 호출되는 것
function onAdd() {
const text = input.value.trim();
const dateValue = date.value.trim();
if (!text) {
input.value = '';
input.focus();
return;
}

//li 생성하는 함수 - createItem(text)
//ul에 생성값을 추가함
items.appendChild(createItem(dateValue, text));
input.value = '';
date.value = '';
input.focus();
}

```
        <input type="datetime-local" class="footer_date" />
const date = document.querySelector('.footer_date');

## alert 기능
```

// 알림 기능
function timeAlert() {
const now = new Date().getTime();
document.querySelectorAll('.item').forEach((item) => {
const timeLimit = parseInt(item.getAttribute('data-time'), 10);

    if (timeLimit <= now) {
      const alertMessage = item.querySelector('span:nth-child(2)').innerText;
      alert(`Time to   ${alertMessage}`);
      item.remove();
    }

});
}

setInterval(timeAlert, 1000);

```

```
