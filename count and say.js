

var countAndSay = function(n) {
    let array=[]
    let count=1;
    let s=""

    array.push("1")
    s+= "1"

    for (let i=1; i < n; i++){

        count = 1;

        i;


        s

        array=s.split("");
        s=""

        array;

        for (i2=0; i2 < array.length; i2++){

            i2

            
            s
            array

            "111221";

            if (array[i2] == array[i2+1] ){
                count++

            }
            else {
                // s += ("1" + array[i2]);
                s +=  (count +array[i2]);
                count=1;
                
            }

        }
    }

    return s
}

// console.log(countAndSay(4),   "1211")
console.log(countAndSay(6),   "312211", "[31 22 11]")


// console.log(countAndSay(5), "111221",   "1211 ==> [11 12 21], [single 1, single 2, double 1s]" )