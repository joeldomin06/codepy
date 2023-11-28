def c_vuelto(monto, product):
    return abs(monto-product)
def c_monedeas(vueltos,moneda):
    return vueltos//moneda
producto = input("ingrese producto: ")
if producto == "A":
    precio = 270
elif producto =="B":
    precio == 340
else:
    precio = 390
monto_ing = 0
while monto_ing <=precio:
    on = int(input())
    monto_ing += on
vuelto = c_vuelto(monto_ing,precio)
if vuelto != 0:
    while vuelto != 0:
        if vuelto // 100 != 0:
            w = c_monedeas(vuelto,100)
            vb = w*100
            vuelto -= vb
            print("monedas de 100 :", w)
        elif vuelto //50 !=0:
            x = c_monedeas(vuelto,50)
            vc = x*50
            vuelto -= vc
            print("monedas de 50 :", x)
        elif vuelto // 10 !=0:
            z = c_monedeas(vuelto,10)
            vz = z*10
            vuelto -= vz
            print("monedas de 10 :", z)  
else:
    print("monto exacto no hay vuelto")




  
