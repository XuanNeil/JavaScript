// Hàm tính tổng viết bằng for...of
const sumFor = (numberList) => {
    let sum = 0;
    for (const number of numberList){
        sum += number;
    }
    return sum;
}
// console.log(sumFor([1, 2, 3, 4, 5]));

/**
 * Hàm reduce cần xác định:
 * 1. Xác định giá trị khởi tạo
 * 2. Xác định công thức với kết quả của bước trước đó.
 * ----
 * ví dụ:
 * 1. giá trị khởi tạo là: 0
 * 2. xác định công thức: result = prevResult + current
 */

const sumReduce = (numberList) => {
    return numberList.reduce((sum, number) => sum + number, 0);
};
// console.log(sumReduce([1,2,3,4,5,6]));

// tìm chuỗi dài nhất trong list sử dụng reduce
const findTheLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0)
    return null;
    return wordList.reduce((theLongestWord, currentWord) => {
        return theLongestWord.length > currentWord.length ? theLongestWord : currentWord

    }, wordList[0])
}
// const listWord = ['ha', 'van', 'xuan'];
// console.log(findTheLongestWord(listWord));

//Viết hàm để chuyển đổi mảng thành object sử dụng reduce
const itemList = [
    {id: 'key1', value: 'Superman'},
    {id: 'key2', value: 'Woman'},
    {id: 'key3', value: 'Battman'},
];
/**
 * is converted to
 * const itemMap = {
 *  key1: 'Superman',
 *  key2: 'Woman',
 *  key3: 'Battman',
 * }
 */
const arrayToObject = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        itemMap[item.id] = item.value;
        console.log('itemMap: ' , itemMap[item.id]);
        console.log('item: ', item.value);
        console.log('itemMap: ', itemMap);
        return itemMap;
    }, {}); 
};
// console.log(arrayToObject(itemList));

const findMin = (numberList) => {
    return numberList.reduce((minNumber, number)=> minNumber < number ? minNumber : number , numberList[0]);
}
console.log(findMin([1, 2, 3, 4, 5, 0]));