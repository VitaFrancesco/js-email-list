/**
 * 
 * @param {Array} array 
 * @param {Number | null} num 
 */
function randomMail (array, num = 1) {
    for (let i = 0; i < num; i++) {
        axios
            .get(
                'https://flynn.boolean.careers/exercises/api/random/mail'
            )
            .then((res) => {
                array.push(res.data.response);
            })
            .catch((err) => {
                console.log(err)
            });
    };
};
let listMail = [];
randomMail (listMail, 10);
    
console.log(listMail);

const htmlList = document.querySelectorAll('.email-list li');
console.log(htmlList);

htmlList.forEach(element => {
    element.innerHTML = listMail.at(htmlList.indexOf(element));
});