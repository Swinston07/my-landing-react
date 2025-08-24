export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: { // blues
          50:"#eff9ff",100:"#d6f0fb",200:"#a3dbf4",300:"#6bc2ea",400:"#3b9bd5",
          500:"#1f6da3",600:"#18527a",700:"#123b57",800:"#0f2a40",900:"#0b1b2b",950:"#07131f"
        },
        kelp: { // greens/teals
          50:"#ecfffb",100:"#d1f7f1",200:"#9cebe0",300:"#69decf",400:"#38cbb6",
          500:"#1daf9b",600:"#149184",700:"#0e6f6a",800:"#0a5855",900:"#063f3d",950:"#04221f"
        }
      }
    }
  },
  plugins: [],
};
