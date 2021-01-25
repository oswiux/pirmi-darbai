
// susumuoti teigiami skaiciai is sarasu

function positiveSum(arr) {
    console.log("pasileido positiveSum funkcija");
    sum = 0;
    console.log("cia foras prasideda");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        console.log("ifas sudirbo ties "+i+" iteracija, kai skaičius "+arr[i]+" yra daugiau už 0.");
        console.log(`bla bla ${arr[i]}`);
            sum += arr[i];
        }
    }
        console.log("o čia foras baigesi");
    return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
// console.log(positiveSum([1, -2, 3, 4, 5]), 13);
// console.log(positiveSum([]),0);
// console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
// console.log(positiveSum([-1, 2, 3, 4, -5]), 9);

// suma skaiciu visu is eilutes


function suma(x) {
    sum = 0 ;
    for (let i = 0; i < x.length; i++){
            sum += x[i];
    }
    return sum;
}

console.log(suma([1, 2, 3, 4]));

// pakelti skaciu juo kartotiniu
function pakeltiKvadratu (skaicius, kartotinis) {
    const rezultatas = skaicius ** kartotinis;
    return rezultatas
    }
    
    console.log(pakeltiKvadratu(3, 2));
    console.log(pakeltiKvadratu(4, 5));
    console.log("...................................");

   