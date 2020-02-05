let tablica1 = [12,13,14];

console.log(tablica1);


if (tablica1[0]>10) {
    tablica1.splice(0,1);
    tablica1.splice(0, 0, 5);
    //console.log(tablica1);
} 

 if (tablica1[1]>10) {
    tablica1.splice(1,1);
    tablica1.splice(1, 0, 5);
    //console.log(tablica1);
} 

if (tablica1[2]>10) {
    tablica1.splice(2,1);
    tablica1.splice(2, 0, 5);
    //console.log(tablica1);
}

console.log(tablica1)