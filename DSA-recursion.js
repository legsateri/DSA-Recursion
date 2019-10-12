// Counting Sheep
console.log('Counting Sheep')
let num = 4;
function sheep(num) {
    if (num == 0) {
        console.log('All the sheep jumped over the fence')
    } else {
        console.log(`${num}: Sheep jumped over the fence`)
        sheep(num - 1);
    }
}
sheep(num);


// Power Calculator
console.log('Power Calculator')
function powerCalculator(baseInt, exp) {
    if (exp < 0) {
        return 'Exponent should be greater than or equal to 0'
    }
    if (exp === 0) {
        return 1;
    }
    return baseInt * powerCalculator(baseInt, exp - 1)
}
console.log(`${powerCalculator(10, 4)}`)


// Reverse String
console.log('Reverse String')
reverseString = (x) => {
    if (x === '') {
        return ''
    }
    return reverseString(x.slice(1)) + x.charAt(0)
}
console.log(reverseString('myAwesomeString'))


// nth Triangular Number
console.log('Triangle Number')
function triangleNumber(n) {
    if (n === 1) {
        return 1
    }
    return n + triangleNumber(n - 1)
}
console.log(triangleNumber(9))


// String Splitter
console.log('String Splitter')
function stringSplitter(string, array) {
    let stringContainsSpace = string.includes(' ')
    let findWhereWordEnds = string.indexOf(' ')
    let firstWordOfString = string.substring(0, findWhereWordEnds)
    let remainingPartOfString = string.substring(findWhereWordEnds + 1)

    if (stringContainsSpace === false) {
        array.push(string)
        return array
    } else {
        array.push(firstWordOfString)
        return stringSplitter(remainingPartOfString, array)
    }
}
stringSplitter('Lets get out of this recurcion', [])


// Fibonacci
console.log('Fibonacci')
fibonacci = (num) => {
    if (num <= 1) {
        return num
    }
    return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(fibonacci(7))


// Factorial
console.log('Factorial')
factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(6))


// Find a Way Out of the Maze
console.log('Find a Way Out of the Maze')
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze) {
    this.maze = maze;
    this.traverse = function (column, row) {
        console.log('D')
        if (this.maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if (this.maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            this.maze[column][row] = 9;
            if (column < this.maze.length - 1) {
                console.log('R')
                this.traverse(column + 1, row);
            }
            if (row < this.maze[column].length - 1) {
                console.log('D')
                this.traverse(column, row + 1);
            }
            if (column > 0) {
                console.log('L')
                this.traverse(column - 1, row);
            }
            if (row > 0) {
                console.log('U')
                this.traverse(column, row - 1);
            }
        }
    };

};
escape(mySmallMaze)


// Anagrams
console.log('Anagrams')
let anagrams = []
let genAnagrams = (word, anagram) => {
    if (!word) {
        anagrams.push(anagram)
        return;
    }
    for (let i = 0; i < word.length; i++) {
        anagram += word[i];
        genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram)
        anagram = anagram.slice(0, anagram.length - 1)
    }
}
genAnagrams('Cho')
console.log(anagrams)


// Organization Chart
console.log('Organization Chart')
const org = [
    { id: 'Zuckerberg', boss: null },
    { id: 'Schroepfer', boss: 'Zuckerberg' },
    { id: 'Schrage', boss: 'Zuckerberg' },
    { id: 'Sandberg', boss: 'Zuckerberg' },
    { id: 'Bosworth', boss: 'Schroepfer' },
    { id: 'Zhao', boss: 'Schroepfer' },
    { id: 'Steve', boss: 'Bosworth' },
    { id: 'Kyle', boss: 'Bosworth' },
    { id: 'Andra', boss: 'Bosworth' },
    { id: 'Richie', boss: 'Zhao' },
    { id: 'Sofia', boss: 'Zhao' },
    { id: 'Jen', boss: 'Zhao' },
    { id: 'VanDyck', boss: 'Schrage' },
    { id: 'Swain', boss: 'Schrage' },
    { id: 'Sabrina', boss: 'VanDyck' },
    { id: 'Michelle', boss: 'VanDyck' },
    { id: 'Josh', boss: 'VanDyck' },
    { id: 'Blanch', boss: 'Swain' },
    { id: 'Tom', boss: 'Swain' },
    { id: 'Joe', boss: 'Swain' },
    { id: 'Goler', boss: 'Sandberg' },
    { id: 'Hernandez', boss: 'Sandberg' },
    { id: 'Moissinac', boss: 'Sandberg' },
    { id: 'Kelley', boss: 'Sandberg' },
    { id: 'Eddie', boss: 'Goler' },
    { id: 'Julie', boss: 'Goler' },
    { id: 'Annie', boss: 'Goler' },
    { id: 'Rowi', boss: 'Hernandez' },
    { id: 'Inga', boss: 'Hernandez' },
    { id: 'Morgan', boss: 'Hernandez' },
    { id: 'Amy', boss: 'Moissinac' },
    { id: 'Chuck', boss: 'Moissinac' },
    { id: 'Vinni', boss: 'Moissinac' },
    { id: 'Eric', boss: 'Kelley' },
    { id: 'Ana', boss: 'Kelley' },
    { id: 'Wes', boss: 'Kelley' }
]

function organize(org, boss) {
    let node = {}
    org
        .filter(item => item.boss === boss)
        .forEach(item => node[item.id] = organize(org, item.id))
    return node;
}
console.log(JSON.stringify(organize(org, null)))


// Binary Representation
console.log('Binary Representation')
function binary(num) {
    if (num === 0) {
        return '0'
    }
    const dividedNum = Math.floor(num / 2);
    const remainder = num % 2;
    if (dividedNum === 0) {
        return `${remainder}`
    }
    return binary(dividedNum) + remainder.toString()
}
console.log(binary(25))