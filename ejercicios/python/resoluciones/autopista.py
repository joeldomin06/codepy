edad = int(input('Ingrese su edad:'))
saldo = 1500
viajes_gratis = 1
flag = True
while flag:
    hora = input('Ingrese horario:')
    if hora == "Bajo" and viajes_gratis > 0:
        viajes_gratis -= 1
        print('Peaje: $',0,'Saldo: $',saldo)
    else:
        if edad < 25:
            costo = 400
        elif edad <= 50:
            if hora == "Alto":
                costo = 900
            else:
                costo = 500
        else:
            costo = 200
        if saldo >= costo:
            saldo -= costo
            print('Peaje: $',costo,'Saldo: $',saldo)
        else:
            print('Saldo: $',saldo, 'INSUFICIENTE')
            r = input('Desea recargar? (SI/NO):')
            if r == "SI":
                recarga = int(input('Ingrese monto:'))
                saldo += recarga
                if recarga > 5000:
                    viajes_gratis += 1
            else:
                flag = False