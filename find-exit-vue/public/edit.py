import json

def leggi_file_json(nome_file):
    with open(nome_file, 'r') as file:
        dati = json.load(file)
    return dati

# Sostituisci 'nome_file.json' con il percorso del tuo file JSON locale
nome_file_json = './aule.json'

# Leggi il file JSON
dati_json = leggi_file_json(nome_file_json)

# Stampa i dati letti dal file JSON
print("Dati dal file JSON:")
print(dati_json)

# Modifica i dati letti dal file JSON
for aula in dati_json:
    if aula['Name'][0] == "T":
        aula['Palazzina'] = "tessile"
        aula["Piano"] = aula["Name"][1] 
        aula["PuntoDiRaccolta"] = "6"
    elif aula['Name'][0] == "M":
        aula['Palazzina'] = "meccanica"
        aula["Piano"] = aula["Name"][1] 
        aula["PuntoDiRaccolta"] = "4"
    elif aula['Name'][0] == "E":
        aula['Palazzina'] = "elettronica"
        aula["Piano"] = aula["Name"][1] 
    elif aula['Name'][0] == "I":
        aula['Palazzina'] = "informatica"
        aula["Piano"] = aula["Name"][1] 
        aula["PuntoDiRaccolta"] = "6"
    elif aula['Name'] == "LTO":
        aula['Palazzina'] = "centrale"
        aula["Piano"] = "0" 
    elif "PAL" in aula["Name"]:
        aula['Palazzina'] = "palestra"
        aula["Piano"] = "0" 
        aula["PuntoDiRaccolta"] = "3"
    elif "PQU" in aula["Name"]:
        aula['Palazzina'] = "querenghi"
        aula["Piano"] = "0" 
    else:
        aula['Palazzina'] = "centrale"
        aula["Piano"] = aula["Name"][0] 

for aula in dati_json:
    if aula["Name"] in ("1-12", "1-11", "1-8", "2-1","2-2", "2-5", "2-6", "2-7", "3-3", "3-4", "3-5", "3-6"):
        aula["PuntoDiRaccolta"] = "1"
    elif aula["Name"] in ("3-11", "3-12", "3-13", "3-14", "4-11", "4-12", "4-13"):
        aula["PuntoDiRaccolta"] = "2"
    elif aula["Name"] in ("2-12", "3-7", "3-8", "3-9", "3-10", "4-2", "4-3"):
        aula["PuntoDiRaccolta"] = "3"
    elif aula["Name"] in ("3-15", "3-16", "3-17", "3-18", "3-19"):
        aula["PuntoDiRaccolta"] = "4"
    elif aula["Name"] in ("1-14", "1-17", "1-90", "1-91", "1-92", "1-93", "1-94", "1-95", "1-96", "E1-5", "E1-10", "M1-23"):
        aula["PuntoDiRaccolta"] = "5"
    elif aula["Name"] in ("M1-18", "M1-11", "M1-8", "E1-7", "E1-8", "E2-1", "E2-2", "E2-7", "E2-9", "E3-1", "E3-2","E3-5","E3-6", "E3-8",):
        aula["PuntoDiRaccolta"] = "6"


# Stampa i dati modificati
print("\nDati modificati:")
print(dati_json)

# Scrivi i dati modificati in un nuovo file JSON
with open('./aule_modificate.json', 'w') as file:
    json.dump(dati_json, file, indent=4)