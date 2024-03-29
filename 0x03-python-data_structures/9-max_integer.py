#!/usr/bin/python3
"""
Write a function that finds the biggest integer of a list.
"""


def max_integer(my_list=[]):
    if len(my_list) == 0:
        return

    large = my_list[0]
    for i in range(1, len(my_list)):
        if large < my_list[i]:
            large = my_list[i]
        else:
            continue
    return large
