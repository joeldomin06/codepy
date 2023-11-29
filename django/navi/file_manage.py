from tempfile import TemporaryFile
def f_insert_update(arch,leng,nombre,puntaje):
    f = arch.open('r')
    temp = TemporaryFile('w+')
    esta = False
    for li in f:
        li = li.strip().split(';')
        if li[0] == leng:
            esta = True
            d = eval(li[1])
            if nombre in d:
                if puntaje > d[nombre]:
                    d[nombre] = puntaje
            else:
                d[nombre] = puntaje
            temp.write('{0};{1}\n'.format(leng,d))
        else:
            temp.write('{0};{1}\n'.format(li[0],li[1]))
    f.close()
    f = arch.open('w')
    temp.seek(0)
    for linea in temp:
        f.write(linea)
    if not esta:
        f.write('{0};{1}\n'.format(leng,{nombre:puntaje}))
    temp.close()
    f.close()