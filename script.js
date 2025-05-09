
const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

`
      🔵
     /  \
    /    \ 
    ______
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    ||  ||
    🟧🟧🟧🟧
    🟧🟧🟧🟧
`

const pointe = 
`
      🔵
     /  \
    /    \ 
    ______
`

const corpsduCrayon = `|| ||`
const gomme = ` 🟧🟧🟧🟧 `


// TEST SUR 3 MOIS =/=
// const drawMyPen = (month) => {
//     const monthValue = calendrierDuCrayon[month]

//     if (monthValue >= 10) {
//         console.log(pointe + '\n' + 
//                 `${corpsduCrayon}\n`.repeat(10) + 
//                 `${gomme}\n`.repeat(2));

//     } else if (monthValue >= 5) {
//         console.log(pointe + '\n' + 
//                 `${corpsduCrayon}\n`.repeat(5) + 
//                 `${gomme}\n`.repeat(2));

//     } else if (monthValue >= 2) {
//         console.log(pointe + '\n' + 
//             `${corpsduCrayon}\n`.repeat(2) + 
//             `${gomme}\n`);
//     }
// }



const drawMyPen = (month) => {
    const monthValue = calendrierDuCrayon[month]

    if (monthValue) {
        console.log(pointe + '\n' + 
                `${corpsduCrayon}\n`.repeat(monthValue) + 
                `${gomme}\n`.repeat(2))

                if (monthValue >= 4) {
                    console.log(gomme);
                }
    }
}


 
drawMyPen('septembre')
drawMyPen('octobre')
drawMyPen('novembre')
drawMyPen('decembre')
drawMyPen('janvier')
drawMyPen('fevrier')
drawMyPen('mars')
drawMyPen('avril')
drawMyPen('mai')
drawMyPen('juin')


