import sys
import os

PACKAGE_PARENT = '..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))

from fun.load import load_numbers

numbers = load_numbers(sys.argv[1])

def merge_sort(list):
  if len(list) == 1:
    return list
  
  left_half, right_half = split(list)
  left = merge_sort(left_half)
  right = merge_sort(right_half)
  # print("%15s %15s" % (left, right))
  return merge(left,right)

def split(list):
  """
  half list left and right
  """
  mid = len(list) // 2
  left = list[:mid]
  right = list[mid:]

  return left, right

def merge(left, right):
  l = []
  i = 0 
  j = 0

  """
  sort list
  """
  while i < len(left) and j < len(right):
    if left[i] < right[j]:
      l.append(left[i])
      i += 1
    else:
      l.append(right[j])
      j += 1

  """
  last list
  """ 
  while i < len(left):
    
    l.append(left[i])
    i += 1
  
  while j < len(right):
    l.append(right[j])
    j += 1

  return l

def verify_sorted(list):
  n = len(list)

  if n == 0 or n == 1:
    return True
  
  result = list[0] <= list[1] and verify_sorted(list[1:])
  return result

# numbers = [54,62,93,17,77,31,44,55,20]
print(numbers)
# print( verify_sorted(numbers) )

result = merge_sort(numbers)

print(result)
# print( verify_sorted(result) )