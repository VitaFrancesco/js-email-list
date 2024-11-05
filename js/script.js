/**
 * 
 * @param {String} tagnName 
 * @param {Array} classList 
 * @param {Array} content 
 * @param {Function} callback 
 * @returns 
 */
function myCreateElement(
    tagnName,
    classList = [],
    content = [],
    callback = false
  ) {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
    }
  
    // Esegui la callback passando l'elemento
    if (callback) {
      callback(el);
    }
  
    // Contenuto
    if (Array.isArray(content)) {
      for (let i = 0; i < content.length; i++) {
        el.appendChild(content[i]);
      }
    } else if (content instanceof HTMLElement) {
      el.appendChild(content);
    } else if (typeof content === "string") {
      el.innerHTML = content;
    } else {
      console.error("Non posso aggiungere l'elemento");
    }
    return el;
};

/**
 * 
 * @param {*} frag 
 * @param {Number | null} num 
 */
function randomMail (frag, num = 1) {
    for (let i = 0; i < num; i++) {
        axios
            .get(
                'https://flynn.boolean.careers/exercises/api/random/mail'
            )
            .then((res) => {
                let li = myCreateElement('li', [], res.data.response);
                frag.appendChild(li);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};


const fragment = document.createDocumentFragment();
randomMail (fragment, 10);

const htmlList = document.querySelector('ul');
console.log(htmlList);

htmlList.appendChild(fragment);
console.log(fragment);