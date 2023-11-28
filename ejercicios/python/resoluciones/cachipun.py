a1 = 0
a2 = 0
flag = True
while flag:
    player1 = input("A: ")
    player2 = input("B: ")
    if player1 == "tijera" and player2 == "papel":
        a1+=1
    elif player1 == "papel" and player2 == "piedra":
        a1+=1
    elif player1 == "piedra" and player2 == "tijera":
        a1+=1
    elif player2 == "tijera" and player1 == "papel":
        a2+=1
    elif player2 == "papel" and player1 == "piedra":
        a2+=1
    elif player2 == "piedra" and player1 == "tijera":
        a2+=1
    print(a1,"-",a2)
    if a1 == 3:
        flag = False
    elif a2 == 3:
        flag = False
if a1==3:
    print("A es el ganador")
else:
    print("B es el ganador")
