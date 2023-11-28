#elementos en comun
def superposicion(elemento1,elemento2):
    l = list()
    for x in elemento1:
        for y in elemento2:
            if x == y:
                l.append(x)
    if len(l)>=1:
        return True
    else:
        return True
lista1 = ['hola', 'mazinkaiser', 'gran mazinger', 'tetsuya tsurugi', 'duke fleed', 'jet scrander']
lista2 = ['mazinger', 'mazinger', 'koji kabuto', 'greandizer', 'jet scrander', 'fairy tail']

print(lista1)
print(lista2)
print(superposicion(lista1,lista2))
