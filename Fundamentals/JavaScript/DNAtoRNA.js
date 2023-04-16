function DNAtoRNA(dna) {
    return dna.split("").map(letter => letter === "T" ? letter = "U" : letter = letter).join("");
}