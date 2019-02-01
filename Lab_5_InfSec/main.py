import sys
srt = sys.stdin.readline()[:-1]
tmp = []
stmp = []
bcr = ""
p = 13
q = 23
F = (p-1) * (q-1)
e = 17
d = 233
public_key = [e, p*q]
gprivate_key = [d, p*q]

def slicer(strn, size):
    b =[]
    ln = len(strn)
    while ln > 0:
        if((ln < size) & (ln > 0)):
            lb = size - ln
            blk = strn[(len(strn) - ln):len(strn)]
            while lb > 0:
                blk = blk + "0" 
                lb = lb - 1
        else:
             blk = strn[(len(strn)- ln):(len(strn)- ln + size)]
        ln = ln - size
        b.append(blk)
    return b
            
def contchar(char, size): 
    x = char
    n = ""
    while x > 0:
        y = str(x % 2)
        n = y + n
        x = int(x / 2)
    if(len(n) < size):
        ln = size - len(n)
        while(ln > 0):
            n = "0" + n
            ln = ln - 1
    return n

def crypchar(char):
    return (char ** public_key[0]) % (public_key[1])
def decrypchar(char):
    return (char ** private_key[0]) % (private_key[1])
def joiner(arr):
    return ''.join(x for x in arr)
for i in srt:
    v = contchar(ord(i),7)
    tmp.append(v)
    stmp.append(ord(i))
    
bcr = joiner(tmp)
bcd =  slicer(bcr, 8)  

cut = []
bcut = []
decut = []
for i in bcd:
    cut.append(contchar((crypchar(int(i,2))), 8))
    bcut.append(int(i,2))
shld = joiner(cut)
cshild = slicer(shld, 7)
chrn = []
for i in cshild:
    chrn.append(int(i,2))
print("\0")
print("Изначальная последовательность")
print(srt)
print("В числовом представлении")
print(stmp)
print(tmp)
print(bcr)
print(len(bcr))



print("\0")

print("Открытый ключ")
print(public_key)
print("Закрытый ключ")
print(gprivate_key)
print("Желаете поменять закрытый ключ?")
b = int(input("Экспонента:"))
n = int(input("Модуль:"))
private_key = [b, n]

for i in cut:
    decut.append(contchar((decrypchar(int(i,2))),8))
deshld = joiner(decut)
demt = slicer(deshld, 7)

print("\0")
print("Зашифрованное сообщение:")
print(chrn)
print(bcd)
print(bcut)
print(shld)
print(cshild)
print(''.join(chr(int(i,2)) for i in cshild))
print("\0")
print("Расшифрованное сообщение:")
print(decut)
print(deshld)
print(demt)
print(''.join(chr(int(i,2)) for i in demt))

