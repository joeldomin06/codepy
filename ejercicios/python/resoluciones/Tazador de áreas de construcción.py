def descuento_aumento(area, valor):
    if area < 100:
        v = (valor*10)/100
    elif area >= 100 and area < 1000:
        v = (valor*20)/100
    else:
        v = (valor*50)/100
    return v
def calcular_area(sector,area):
    if sector == "Sector 1":
        if area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c-da
            return ct
        elif area >= 100 and area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
        elif area >= 1000 and area < 6000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
    elif sector == "Sector 2":
        if area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c-da
            return ct
        elif area >= 100 and area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
        elif area >= 1000 and area < 6000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
    elif sector == "Sector 3":
        if area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c-da
            return ct
        elif area >= 100 and area < 1000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
        elif area >= 1000 and area < 6000:
            c = area*20
            da = descuento_aumento(area,c)
            ct = c+da
            return ct
def avaluo(candidad_de_lotes,area_promedio,valor_uf):
    a = candidad_de_lotes
    b = area_promedio
    c = valor_uf
    return a*b*c
#programa

flag = True
while flag:
    area = int(input("ingrese Area"))
    if area == 0:
        flag = False
    else:
        sector = int(input("ingrese Sector"))
        if sector == 1:
            con1 = "Sector"+" "+"1"
            ca = calcular_area(con1,area)
            print(ca)
        elif sector == 2:
            con2 = "Sector"+" "+"2"
            ca = calcular_area(con2,area)
            print(ca)
        elif sector == 3:
            con3 = "Sector"+" "+"3"
            ca = calcular_area(con3,area)
            print(ca)
print ("sector 1 valor: ",avaluo(10,50,29856))
print ("sector 2 valor: ",avaluo(10,550,29856))
print ("sector 3 valor: ",avaluo(10,3500,29856))
