import sys
import os

PACKAGE_PARENT = '..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))

from fun.load import load_numbers

numbers = load_numbers(sys.argv[1])

"""
Quicksort
[5,4,6,7,8]
privot = 5 first lists
less_than_pivot = [4] less and equal 5 
greater_than_privot = [6, 7, 8] more 5

Recursion quicksort(less_than_pivot) + [privot] + quicksort(greater_than_privot)

resuit = [4, 5, 6, 7, 8]
"""
def quicksort(lists):
  if len(lists) <= 1:
    return lists
  
  less_than_pivot = []
  greater_than_privot = []
  privot = lists[0]

  for item in lists[1:]:
    if item <= privot:
      less_than_pivot.append(item)
    else:
      greater_than_privot.append(item)
  # print("%15s %15s %15s" % (less_than_pivot, privot, greater_than_privot) )
  return quicksort(less_than_pivot) + [privot] + quicksort(greater_than_privot)


sort_numbers = quicksort(numbers)
print(sort_numbers)