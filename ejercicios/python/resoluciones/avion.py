flag = True
suma = 0
ganancias = 0
i = 0
mayor = -1

while flag:
    peso = int(input('Ingrese peso maleta:'))
    if suma + peso > 180:
        flag = False
    else:
        if peso <= 100:
            suma += peso
            i += 1
            if 0 <= peso <= 5:
                ganancias += 1000*peso
            elif 6 <= peso <= 30:
                ganancias += 1500*peso
            else:
                ganancias += 2000*peso
            if mayor < peso:
                mayor = peso

print('Número de maletas:',i)
print('Maleta más pesada:',mayor,'Kg.')
print('Peso promedio:',suma/i,'Kg.')
print('Ganancias: $',ganancias)