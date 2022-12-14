#!/usr/bin/python3

"""
Write a program that prints all possible different combinations of two digits
"""
for i in range(0, 8):
    for j in range(i + 1, 10):
        print("{:d}{:d}".format(i, j), end=', ')
print("{:d}{:d}".format(i + 1, j))

# or
# for i in range(0, 8):
#     for j in range(i + 1, 10):
#         print(f"{i}{j}", end=', ')
# print(f"{i+1}{j}")
