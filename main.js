const spanText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor')
const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eos dicta laborum nihil autem minima consequatur atque et distinctio dolorum, unde ut. Alias quae cumque perspiciatis corporis itaque commodi quod veniam doloremque ex cupiditate officiis libero eveniet accusamus quasi expedita cum quibusdam, reiciendis excepturi magnam illo quam quos, incidunt, facere tempore. Quidem, nostrum earum eveniet architecto sed, neque numquam asperiores recusandae commodi ut distinctio, voluptate incidunt ea velit atque. In quidem iure soluta nobis consectetur, perferendis mollitia corrupti, ratione excepturi illo, dicta voluptates inventore a distinctio cupiditate vitae possimus? Laboriosam odit eveniet suscipit nulla ex nam quod aliquid dolore atque!"

let indexText = 0;
const time = 45
const addLetter = () => {
    spanText.textContent += txt[indexText]; 
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursolAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursolAnimation, 400);