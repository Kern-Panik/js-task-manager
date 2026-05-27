const prompt = require('prompt-sync')();

let task = "";
let completedTaskCount = 0;

const showTask = () => {
    if (task == false) {
        console.log('Задача отсутствует');
    } else {
        console.log(task);
    }
}

const setTask = (taskDescription) => {
    if (task == true) {
        console.log('Не могу добавить задачу, завершите или удалите предыдущую');
    } else {
        task = taskDescription;
    }
}

const completeTask = () => {
    task = "";
    completedTaskCount++;
}

const deleteTask = () => {
    if (task == false) {
        console.log('Задача отсутствует');
    } else {
        task = "";
        console.log('Задача удалена!');
    }
}

const taskManager = () => {
    let choice;
    let taskDescription;

    console.log(`Текущая задача: ${(task == false) ? 'Отсутствует' : task}.
                \nКоличество выполненных задач: ${completedTaskCount}`);
    console.log(`\nЧто вы желаете сделать?\n1. Показать задачу\n2. Добавить задачу\n3. Завершить задачу\n4. Удалить задачу\n`)
    choice = Number(prompt('Введите номер варианта: '));
    
    switch(choice) {
        case 1:
            showTask();
            break;
        case 2:
            taskDescription = prompt('Введите описание вашей задачи: ');
            setTask(taskDescription);
            break;
        case 3:
            completeTask();
            console.log('Задача завершена!');
            break;
        case 4: 
            deleteTask();
            break;
        default:
            console.log('Снова введите предложенный номер варианта: ');
            choice = Number(prompt());
            break;
    }
}

taskManager();

// Для тестирования

// showTask();
// setTask('test');
// completeTask();
// deleteTask();