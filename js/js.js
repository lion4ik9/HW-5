document.getElementById('btnDrink').addEventListener('click', function(){
    const drink = document.getElementById('drink').value;
    const p = document.getElementById('result1');

   switch (drink) {
    case 'Кава':
        p.textContent = "Ви вибрали каву";
        break;
    case 'Чай':
        p.textContent = "Ви вибрали чай";
        break;
    case 'Сік':
        p.textContent = "Ви вибрали сік";
        break;
        default:
            p.textContent = 'Введено неправильно!';
   }
});





document.getElementById('btnDay').addEventListener('click', function(){
    const day = document.getElementById('day').value;
    const p = document.getElementById('result2');

   switch (day.toLowerCase()) {
    case 'понеділок':
    case 'вівторок':
    case 'середа':
    case 'четвер':
    case 'п`ятниця':
        p.textContent = "Це будень";
        break;
    case 'субота':
    case 'неділя':
        p.textContent = "Це вихідний";
        break;
        default:
            p.textContent = 'Введено неправильно!';
   }
});



document.getElementById('btnMonth').addEventListener('click', function(){
    const month = document.getElementById('month').value;
    const p = document.getElementById('result3');

   switch (month.toLowerCase()) {
    case 'грудень':
    case 'січень':
    case 'лютий':
        p.textContent = "Це місяць зими";
        break;
    case 'березень':
    case 'квітень':
    case 'травень':
        p.textContent = "Це місяць весни";
        break;
    case 'червень':
    case 'липень':
    case 'серпень':
        p.textContent = "Це місяць літа";
        break;
    case 'вересень':
    case 'жовтень':
    case 'листопад':
        p.textContent = "Це місяць осені";
        break;
        default:
            p.textContent = 'Введено неправильно!';
   }
});



document.getElementById('btnMonth2').addEventListener('click', function(){
    const month = document.getElementById('month2').value;
    const p = document.getElementById('result4');

   switch (month.toLowerCase()) {
    case 'грудень':
    case 'січень':
    case 'березень':
    case 'травень':
    case 'липень':
    case 'серпень':
    case 'жовтень':
        p.textContent = "Цей місяць містить 31 день";
        break;
    case 'квітень':
    case 'червень':
    case 'вересень':
    case 'листопад':
        p.textContent = "Ций місяць містить 30 днів";
        break;
    
    case 'лютий':
        p.textContent = "Цей місяць містить від 28 до 29 днів"
        break;
        default:
            p.textContent = 'Введено неправильно!';
   }
});



document.getElementById('btnColoUr').addEventListener('click', function(){
    const coloUr = document.getElementById('coloUr').value;
    const p = document.getElementById('result5');

   switch (coloUr.toLowerCase()) {
    case 'червоний':
        p.textContent = "Стоп!";
        break;
    case 'жовтий':
        p.textContent = "Чекай...";
        break;
    case 'зелений':
        p.textContent = "Біжи";
        break;
    case 'синій':
        p.textContent = "ЛЕТИ";
        break;
    case 'білий':
        p.textContent = "Безпечний🙍‍♂️👍";
        break;
    case 'чорний':
        p.textContent = "НЕБЕЗПЕЧНИЙ❌🔫👩🏿‍🦲"
        break;
        default:
            p.textContent = 'Введено неправильно!';
   }
});

document.getElementById("btnOper").addEventListener("click", function() {
    const operator = document.getElementById("operator").value;
    let resultElement = document.getElementById("result6");
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let result;
    switch (operator) {
         case "+": result = first + second;
            break;
         case "-": result = first - second;
            break;
         case "*": result = first * second;
            break;
         case "/":
         if (second === 0) {
            alert("На нуль ділити не можна!");
         } else {
            result = first / second;
         }
            break;
         default: result = "Invalid operator";
            break;
    }
    resultElement.textContent = result;
});