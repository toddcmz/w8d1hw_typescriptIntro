// Question 1 - initialize typescript stuff properly

type CTStudent = {
    id : string,
    name : string,
    age : number,
    isTired : boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1:CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student2:CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3:CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}

// Question 2 - type guard thing plus void function plus | null to Fruit
type Fruit={
    color:string,
    shape:string 
} | null

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit=null

function checkFruit(aFruit:Fruit):void{
    if(aFruit === null){
        console.log('You ate my fruit')
    }else{
        console.log(aFruit['color'])
    }
}

// Question 3 - union two types and instance the union
// note dylan says to do this with &, but & is listed
// as intersection, | is listed as union. I see that you
// can union these two to allow Ebook to be one or the other,
// or you can use intersection as Dylan requested in the hw
// directions to require all component attributes.
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}
// intersection at Dylan's instructions
type Ebook1 = Book & DigitalBook

let myEbook1:Ebook1 = {
    isbn : '320s8dlid',
    title: "Ender's Game",
    author: 'OSC',
    fileType: 'someBook.pdf'
}
// union as written in hw
type Ebook2 = Book | DigitalBook

let myEbook2:Ebook2 = {
    isbn: 'fhsoiudf',
    title: 'Ender Game',
    author: "OSC"
}

let myEbook3:Ebook2 = {
    fileType: 'sjdoi.pdf'
}

// Question 4 - complicated shopItem type creation
// and make 3 items with it

enum Category {
    Shirts = 'SHIRTS',
    Shoes = 'SHOES',
    Pants = 'PANTS',
    Hats = 'HATS'
}

type ShopItem = {
    readonly id: number,
    price : number,
    description : string,
    color?:string,
    category:Category,
    keywords: string[]
}

let infGaunt:ShopItem = {
    id: 1,
    price : 5000,
    description : 'one glove to rule them all',
    color: 'bronze, mostly',
    category: Category.Shoes,
    keywords: ["Marvel", "Power", "Thanos"]
}

let tonyShirt:ShopItem = {
    id: 2,
    price : 20,
    description : 'just a tshirt',
    category: Category.Shirts,
    keywords: ["Marvel", "arc reactor", "love you 9000"]
}

let strangeCape:ShopItem = {
    id: 3,
    price : 2000,
    description : 'fly around',
    color: 'red',
    category: Category.Pants,
    keywords: ["Marvel", "Magic", "Doctor Strange", "Quirky"]
}