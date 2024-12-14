const populations = {"punjab": 127688922, "sindh": 55696147, "kpk": 40856097, "balochistan": 14894402, "ict": 2363863, "ajk": 4045366, "gilgit": 1249000
}

let path="C:\Users\seans\source\repos\random_files_js\hdi.js"


//asdasdasd
// HDI values for each region
const hdi_values = {"punjab": 0.543, "sindh": 0.511, "kpk": 0.508, "balochistan": 0.457, "ict": 0.650, "ajk ": 0.587, "gilgit": 0.570};

let ents=Object.entries(hdi_values).sort((a,b)=> b[1]-a[1])
let sorted_obj=Object.fromEntries(ents)

console.log(sorted_obj)

console.log(sorted_obj[0])
// Calculate total population
const total_population = Object.values(populations).reduce((a, b) => a + b, 0);

console.log(total_population.toExponential(2))
// Calculate weighted HDI

const weighted_hdi = Object.keys(populations).reduce((sum, region) => {
    return sum + (populations[region] / total_population) * hdi_values[region]}, 0);

console.log(weighted_hdi.toFixed(3));