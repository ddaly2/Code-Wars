def DNA_strand(dna):
    """.maketrans creates a dictionary of ASCII values for the two strings you pass it. Each character in the first string will be a key and each character in the second string will be the respective values. Both MUST BE SAME LENGTH. 
    
    .translate(<dictionary>) will literally use the dictionary of ASCII values to translate or decode the string that you call the translate method on"""

    mytable = dna.maketrans("ATCG","TAGC")
    return dna.translate(mytable)