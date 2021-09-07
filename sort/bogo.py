import random
import sys
import os

PACKAGE_PARENT = '..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))

from fun.load import load_numbers

numbers = load_numbers(sys.argv[1])

def is_sorted(lists):
  for index in range(len(lists)-1):
    if(lists[index] > lists[index+1]):
      return False
  return True

#random sort
def bogo_sort(lists):
  attempts = 0
  while not is_sorted(lists):
    #Takes a sequence and returns the sequence in a random order
    random.shuffle(lists)
    attempts += 1
  print("count time = :", attempts)
  return lists

print(numbers)
print(bogo_sort(numbers))

