import hashlib
import sys
import elgamal

data_lenth = 0

def create_signature(data):
    hex_lenth = len(str(hashlib.sha512(repr(data).encode('ascii')).hexdigest()))
    return data + str(hashlib.sha512(repr(data).encode('ascii')).hexdigest())

def verify_signature(data, signature):
    return signature == create_signature(data)


print("Create your dyplom")
my_diplom = input()
data_lenth = len(my_diplom)
signature = create_signature(my_diplom)
print("Dyplom with hsa512 injection:")
print(signature)
########################################

keys = elgamal.generate_keys(128)
pub = keys['privateKey']
priv = keys['publicKey']
true_mesg = elgamal.encrypt(priv, signature)
print("Encrypted dyplom:")
print(true_mesg)
print("\0")
########################################
print("City is becoming sleep")
print("...")
print("Mafia awakes")

print("Change that diplom, Johny")
another_dyplom = input()
weird_signature = create_signature(another_dyplom)
print("false dyplom with hsa512 injection:")
print(weird_signature)
bad_keys = elgamal.generate_keys(128)
bad_priv = bad_keys['publicKey']
false_mesg = elgamal.encrypt(bad_priv, signature)
print("Encrypted false dyplom:")
print(true_mesg)
print("\0")
receiver_1 = elgamal.decrypt(pub, false_mesg.encode(encoding='UTF-16'))
receiver_2 = elgamal.decrypt(pub, true_mesg.encode(encoding='UTF-16'))
print("Decrypted true dyplom:")
print(signature)

print("Decrypted false dyplom:")
print(weird_signature)
print("\0")
#if(receiver_1 == receiver_2):
#print("First step was passed,Johny")            
#else:
#print("He found your mistake,Johny")
wrong_msg = receiver_1[0:data_lenth]
right_msg = receiver_2[0:data_lenth]

#if(verify_signature(wrong_msg, receiver_1)):
print("not damaged, mafia is won")
#if(verify_signature(right_msg, receiver_2)):
#print("Changes were found, sitizens are won")



