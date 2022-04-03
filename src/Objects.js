/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender == 'female') delete data.age;
    if (data.gender == 'male' && data.income == undefined) data.income = 100000;
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let result = Object.keys(obj1)
        .concat(Object.keys(obj2))
        .concat(Object.keys(obj3));
    return result.sort();
    //for (let i = 0; i < keys.length; i++) {}
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
import cloneDeep from 'lodash.clonedeep';

export function objectClone(obj, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result[i] = cloneDeep({ id: i, ...obj });
    }
    return result;
}
