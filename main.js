const addBtn = document.querySelector('.fa-plus'); //추가버튼
const input = document.querySelector('.footer_input'); // input 요소
const items = document.querySelector('.items'); //ul
const date = document.querySelector('.footer_date');

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

//이벤트 등록
addBtn.addEventListener('click', onAdd);

input.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
// 앞에가 true 이면 뒤에는 무조건 실행

date.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
