// Задание 1

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

const musicAlboms = [
    {
        title: "A Hard Day’s Night",
        artist: "The Beatles",
        year: "1964"
    },
    {
        title: "The Wall",
        artist: "Pink Floyd",
        year: "1982"
    },
    {
        title: "The Great Summit",
        artist: "Louis Armstrong",
        year: "1964"
    },
    {
        title: "Blue Hawaii",
        artist: "Elvis Presley",
        year: "1961"
    }
];

const musicCollection = {
    musicAlboms: [...musicAlboms],
    [Symbol.iterator]: function () { // генератор
        let countAlboms = 0;
        return {
            next: (() => { // метод для продолжения таких же действий
                if (countAlboms >= this.musicAlboms.length) {
                    return {done: true}
                } else {
                    return {
                        value: this.musicAlboms[countAlboms++],
                        done: false
                    }
                }
            })
        }
    },
}

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

    for (const musicAlbom of musicCollection) {
        console.log(`${musicAlbom.title} - ${musicAlbom.artist} (${musicAlbom.year})`);
    }