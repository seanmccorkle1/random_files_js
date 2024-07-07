let single_quote = '"'
let double_quotes = /""/g

const AROUND_reg = /AROUND\([\d]+\)/g

let s = `"Nicaraguan"|"Nicaragua"|"contras"|"Nicaraguas"|"Nicaragua's"|"contras" AROUND(20) "civil"|"communist"|"communism"|"communists"|"socialism"|"revolutionaries"|"revolutionary"|"socialists"|"Revolution"|"socialist"|"war"|"revolutions"`


let s2 = '80s|eighties|1980|1980s|nineties|90s|nineties|1990s|20th'

s = s.trim().replaceAll("||", "|").replaceAll("OR OR", "OR").replaceAll("  ", " ").replaceAll(double_quotes, single_quote)

s2 = s2.trim().replaceAll("||", "|").replaceAll("OR OR", "OR").replaceAll("  ", " ").replaceAll(double_quotes, single_quote)

function searchStringStuff(string) {


    let string_without_quotes=""
    let string_with_quotes=""

    const there_is_a_bunch_of_quote_marks = string.match(/\"/g)

    if (!there_is_a_bunch_of_quote_marks) {
        return addQuotes(string)
    }

    if (there_is_a_bunch_of_quote_marks) {
        return removeQuotes(string)
    }

    string_without_quotes
        
    function addQuotes(string) {
        string= "("+string.split("|").map(e => `"${e}"`).join("|").replaceAll(double_quotes, single_quote)+")"
        string=string.replaceAll("((","(").replaceAll("))",")")

        string_with_quotes=string
        return string_with_quotes
    }


    function removeQuotes(string) {

        const match_array = string.match(AROUND_reg)
        const hasAROUND = match_array ? true : false

        string_without_quotes = string.replaceAll(single_quote, "")

        string_without_quotes = "(" + string_without_quotes + ")"
        string_without_quotes = string_without_quotes.replaceAll("((", "(").replaceAll("))", ")")

        return string_without_quotes

        if (hasAROUND) {
            let around = match_array[0]
            let two_halves = string.split(AROUND_reg)

            let [left, right] = [two_halves[0], two_halves[1]]

            left
            right

            let new_left = left.replaceAll(single_quote, "")
            let new_right = right.replaceAll(single_quote, "")

            string_without_quotes = new_left + " " + around + " " + new_right
            string_without_quotes = "(" + string_without_quotes + ")"
            string_without_quotes = string_without_quotes.replaceAll("((", "(").replaceAll("))", ")")

            return string_without_quotes
        }

        string = '"' + string + '"'
        return string
    }
}

const func=require
let array=Object.values(func)

Object.keys(array)
Object.values(array)

// array[1]

let f= array[1]


function switchBarsForReddit(string) {

    string

    string = string.replace(AROUND_reg, ") OR (").replaceAll("|", " OR ")
    string = "(" + string + ")"
    string = string.replaceAll("((", "(").replaceAll("))", ")")

    return string

}

// switchBarsForReddit(s)

console.log(searchStringStuff(s))
console.log(searchStringStuff(s2))

// Nicaraguan|Nicaragua|contras|Nicaraguas|Nicaragua's|contras  AROUND(20)  civil|communist|communism|communists|socialism|revolutionaries|revolutionary|socialists|Revolution|socialist|war|revolutions