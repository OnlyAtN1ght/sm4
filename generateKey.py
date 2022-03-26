# Genererate Key of type = Z{32_2} ^ 32
import random
key = [[random.randint(0,1) for i in range(32)] for i in range(32)]
print(key)