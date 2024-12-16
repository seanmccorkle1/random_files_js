const { exec: open_url } = require("child_process");

const indian_states = [
  "Andhra_Pradesh", "Arunachal_Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal_Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya_Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil_Nadu", "Telangana", "Tripura", 
  "Uttar_Pradesh", "Uttarakhand", "West_Bengal"
];

let i=0
indian_states.forEach(curr_state => {
    if (i++>=1)return
    const url = `https://en.wikipedia.org/wiki/${curr_state}`;
    // const url = `https://en.wikipedia.org/wiki/${curr_state}`;
  open_url(`start ${url}`, (err) => {

    if (err) console.error(`Error opening ${url}:`, err);
  });
})


// (async (p1) => {

//     const open = (await import('open')).default

//     const governorates = [
//         "1. al-Cairo (القاهرة)", "2. al-Giza (الجيزة)", "3. Alexandria (الإسكندرية)", "4. Kafr El Sheikh (كفر الشيخ)", "5. Asyut (أسيوط)", "6. al-Beheira (البحيرة)",
//         "7. Damietta (دمياط)","8. al-Ismailia (الإسماعيلية)", "9. Aswan (أسوان)", "10. al-Luxor (الأقصر)"
//     ]

//     function formatGovernorateName(governorate) {
//         let name = governorate.slice(governorate.indexOf(" ") + 1, governorate.indexOf("(")).trim(); // Extracts name between space and (
//         return `${name} governorate`;   
//     }
    
//     // ?tbm=isch
//     // means 'to be matched = image search'

//     let i=0
//     governorates.forEach(governorate => {
//         if (i++ >= 4) return

//         let formattedName = formatGovernorateName(governorate);
//         let url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(formattedName)}`
//         open(url)
//     })
// })()