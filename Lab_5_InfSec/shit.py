import sys

s = sys.stdin.readline()[:-1]
t = []
for i in s:
    v = ord(i)
    t.append(v >> 8)
    t.append(v & 255)
print("\0")
print("Изначальная последовательность")
print(s)
print("В числовом представлении")
print(t)
print("\0")
p = 13
q = 23
F = (p-1) * (q-1)
e = 17
d = 233

public_key = [e, p*q]
gprivate_key = [d, p*q]
print("Открытый ключ")
print(public_key)
print("Закрытый ключ")
print(gprivate_key)
print("Желаете поменять закрытый ключ?")
print("Экспонента:")
b = int(input())
print("Модуль:")
n = int(input())
private_key = [b, n]

def crypchar(char):
    return (char ** public_key[0]) % (public_key[1])
def decrypchar(char):
    return (char ** private_key[0]) % (private_key[1])

enc = [crypchar(i) for i in t]
print("\0")
print("Зашифрованное сообщение:")
print(''.join((chr((x << 8) + y) for x, y in zip(enc[0::2], enc[1::2]))))
print(enc)

dec = [decrypchar(i) for i in enc]
print("\0")
print("Расшифрованное сообщение:")
print(''.join((chr((x << 8) + y) for x, y in zip(dec[0::2], dec[1::2]))))
print(dec)
