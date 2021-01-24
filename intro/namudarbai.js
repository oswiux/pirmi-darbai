const pirmas = 4;
console.log(pirmas);

const antras = 8;
console.log(antras);

const trecias = 10;
console.log(trecias);

console.log("...............");

const s1 = "apelsinas";
console.log(s1);

const s2 = "bananas";
console.log(s2);

const s3 = "mandarinas";
console.log(s3);

console.log("....................");

const a = [33, 22, 10, 7, 8];
console.log(a);
const b = [11, 12, 53, 84, 95];
console.log(b);
const c = [1, 2, 3, 4, 5];
console.log(c);

console.log("........................");

const x = ["agurkas", "pomidoras", "saslykas", "suo", "kewne"];
console.log(x);
const y = ["kate", "ceburekas", "vaizduske", "asilas", "stalas"];
console.log(y);
const z = ["pultas", "lova", "centas", "maistas", "padargas"];
console.log(z);

console.log(".......................");

const suma = pirmas + antras + trecias;
console.log(pirmas, '+', antras, '+', trecias, '=', suma);

console.log("..........................");

const sujungimas = [s1 + " " + s2 + " " + s3];
console.log(sujungimas);

console.log("..............");

const arezultatas = (a[0] - a[1] + a[2] - a[3] + a[4]);
console.log("a rezultatas", arezultatas);
const brezultatas = (b[0] - b[1] + b[2] - b[3] + b[4]);
console.log("b rezultatas", brezultatas);
const crezultatas = (c[0] - c[1] + c[2] - c[3] + c[4]);
console.log("c rezultatas", crezultatas);

console.log(".......................");

console.log(z + " , " + y + "   " + x);


function check(a, x) {
    if (a === x) {
        return true;

    }
}
console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);