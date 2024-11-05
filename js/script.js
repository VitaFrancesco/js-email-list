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
                // qui abbiamo accesso all'errore che ha generato la chiamata
            });
    };
};
let listMail = [];
randomMail (listMail, 10);
    
console.log(listMail)